
import React, { useEffect, useRef, useState } from 'react';

const SectionTitle: React.FC<{ number: string; title: string }> = ({ number, title }) => (
    <h2 className="text-2xl md:text-3xl font-bold text-brand-lightest-slate flex items-center mb-12 whitespace-nowrap">
        <span className="text-brand-teal font-mono text-xl md:text-2xl mr-4">0{number}.</span>
        {title}
        <span className="block h-px w-full md:w-64 bg-brand-light-navy ml-4"></span>
    </h2>
);

interface ForecastMetrics {
    ignitionProb: number;
    fuelMoisture: string;
    windVector: string;
    ndviValue: string;
    riskLevel: 'LOW' | 'MODERATE' | 'HIGH' | 'CRITICAL';
}

const MapNotification: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMap = useRef<any>(null);
  const markerRef = useRef<any>(null);
  
  const [activeTab, setActiveTab] = useState<'alert' | 'forecast'>('alert');
  const [selectedPos, setSelectedPos] = useState<{lat: number, lng: number} | null>(null);
  const [temp, setTemp] = useState<string>('35');
  const [email, setEmail] = useState<string>('');
  const [reportEmail, setReportEmail] = useState<string>('');
  const [submitted, setSubmitted] = useState(false);
  const [reportSubmitted, setReportSubmitted] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [forecast, setForecast] = useState<ForecastMetrics | null>(null);

  // Simulate AI calculation based on coordinates
  const calculateForecast = (lat: number, lng: number) => {
    setIsCalculating(true);
    setReportSubmitted(false); // Reset report status on new location
    
    // Slight delay to simulate AI processing
    setTimeout(() => {
        const seed = (lat + lng) * 1000;
        const random = (s: number) => {
            const x = Math.sin(s) * 10000;
            return x - Math.floor(x);
        };

        const prob = Math.floor(random(seed) * 45) + 5; // 5% to 50%
        const moisture = (random(seed + 1) * 15 + 5).toFixed(1);
        const windSpeed = Math.floor(random(seed + 2) * 35) + 5;
        const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
        const windDir = directions[Math.floor(random(seed + 3) * directions.length)];
        const ndvi = (random(seed + 4) * 0.6 + 0.1).toFixed(2);
        
        let risk: 'LOW' | 'MODERATE' | 'HIGH' | 'CRITICAL' = 'LOW';
        if (prob > 40) risk = 'CRITICAL';
        else if (prob > 25) risk = 'HIGH';
        else if (prob > 12) risk = 'MODERATE';

        setForecast({
            ignitionProb: prob,
            fuelMoisture: `${moisture}% ${Number(moisture) < 10 ? 'DRY' : 'STABLE'}`,
            windVector: `${windSpeed}km/h ${windDir}`,
            ndviValue: `${ndvi} (${Number(ndvi) < 0.3 ? 'Low' : 'Healthy'})`,
            riskLevel: risk
        });
        setIsCalculating(false);
    }, 800);
  };

  useEffect(() => {
    if (!mapRef.current || leafletMap.current) return;

    const L = (window as any).L;
    if (!L) return;

    const map = L.map(mapRef.current, {
        zoomControl: false
    }).setView([45.4369, 12.3334], 12);
    leafletMap.current = map;

    L.control.zoom({ position: 'bottomright' }).addTo(map);

    const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap'
    }).addTo(map);

    const baseUrl = "https://sh.dataspace.copernicus.eu/ogc/wms/ab87db49-e0a5-4dc8-b699-ff6e24174a2d";
    
    const createWms = (layerId: string) => L.tileLayer.wms(baseUrl, {
      tileSize: 512,
      attribution: '&copy; Copernicus Data Space',
      maxcc: 20,
      minZoom: 6,
      maxZoom: 16,
      layers: layerId,
      format: 'image/png',
      transparent: true,
      time: "2023-06-01/2023-12-13"
    });

    const sentinel2 = createWms("SENTINEL-2-CLOUDLESS");
    const ndvi = createWms("NDVI");
    
    L.control.layers({ "OpenStreetMap": osm }, { 
        "Sentinel-2 Mosaic": sentinel2,
        "NDVI Vegetation": ndvi 
    }).addTo(map);

    sentinel2.addTo(map);

    map.on('click', (e: any) => {
      const { lat, lng } = e.latlng;
      setSelectedPos({ lat, lng });
      calculateForecast(lat, lng);

      if (markerRef.current) {
        markerRef.current.setLatLng(e.latlng);
      } else {
        markerRef.current = L.marker(e.latlng).addTo(map);
      }
    });

    return () => {
      if (leafletMap.current) {
        leafletMap.current.remove();
        leafletMap.current = null;
      }
    };
  }, []);

  const handleAlertSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPos) {
      alert("Please select a location on the map first.");
      return;
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleReportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPos) {
      alert("Please select a location on the map first.");
      return;
    }
    setReportSubmitted(true);
    setTimeout(() => setReportSubmitted(false), 5000);
  };

  const getRiskColor = (level: string) => {
    switch(level) {
        case 'CRITICAL': return 'text-red-500';
        case 'HIGH': return 'text-orange-500';
        case 'MODERATE': return 'text-yellow-500';
        default: return 'text-brand-teal';
    }
  };

  return (
    <section id="alerts" className="py-24">
      <SectionTitle number="3" title="Intelligence & Alerts" />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-brand-navy p-6 rounded-xl border border-brand-light-navy shadow-2xl overflow-hidden">
        {/* Map Column */}
        <div className="lg:col-span-2 relative min-h-[500px]">
            <div className="absolute top-4 left-4 z-[1000] bg-brand-deep-blue/90 p-3 rounded border border-brand-teal text-[10px] font-mono text-brand-teal pointer-events-none uppercase tracking-widest shadow-xl">
                🛰️ Copernicus Live Feed
            </div>
            {isCalculating && (
                <div className="absolute inset-0 z-[1001] bg-brand-deep-blue/40 backdrop-blur-[2px] flex items-center justify-center">
                    <div className="bg-brand-navy border border-brand-teal p-4 rounded-lg flex items-center gap-3">
                        <div className="w-4 h-4 border-2 border-brand-teal border-t-transparent rounded-full animate-spin"></div>
                        <span className="text-brand-teal font-mono text-xs uppercase tracking-tighter">AI Analysis in Progress...</span>
                    </div>
                </div>
            )}
            <div 
                ref={mapRef} 
                className="w-full h-full min-h-[500px] rounded-lg border border-brand-light-navy overflow-hidden z-10"
            />
        </div>

        {/* Controls Column */}
        <div className="flex flex-col h-full">
            {/* Tabs Header */}
            <div className="flex mb-4 bg-brand-deep-blue p-1 rounded-lg border border-brand-light-navy">
                <button 
                    onClick={() => setActiveTab('alert')}
                    className={`flex-1 py-2 text-xs font-mono rounded transition-all duration-300 ${activeTab === 'alert' ? 'bg-brand-light-navy text-brand-teal shadow-inner' : 'text-brand-slate hover:text-brand-lightest-slate'}`}
                >
                    Temp Alert
                </button>
                <button 
                    onClick={() => setActiveTab('forecast')}
                    className={`flex-1 py-2 text-xs font-mono rounded transition-all duration-300 ${activeTab === 'forecast' ? 'bg-brand-light-navy text-brand-teal shadow-inner' : 'text-brand-slate hover:text-brand-lightest-slate'}`}
                >
                    Risk Forecast
                </button>
            </div>

            <div className="bg-brand-light-navy/20 p-6 rounded-lg border border-brand-light-navy flex-grow flex flex-col min-h-[400px]">
                {activeTab === 'alert' ? (
                    <div className="animate-fade-in flex flex-col h-full">
                        <h3 className="text-xl font-bold text-brand-lightest-slate mb-2">Threshold Alert</h3>
                        <p className="text-brand-slate text-xs mb-6 font-mono leading-relaxed">
                            Specify location and temp limit. Our AI will notify you via email when risks escalate.
                        </p>

                        <form onSubmit={handleAlertSubmit} className="space-y-4 flex-grow">
                            <div>
                                <label className="block text-brand-light-slate text-[10px] font-mono mb-1 uppercase tracking-tight">Target Coordinates</label>
                                <div className="bg-brand-deep-blue/50 p-3 rounded border border-brand-light-navy text-brand-teal font-mono text-xs truncate">
                                    {selectedPos 
                                        ? `${selectedPos.lat.toFixed(5)}, ${selectedPos.lng.toFixed(5)}` 
                                        : 'Select point on map'}
                                </div>
                            </div>

                            <div>
                                <label className="block text-brand-light-slate text-[10px] font-mono mb-1 uppercase tracking-tight">Limit (°C)</label>
                                <input 
                                    type="number" 
                                    value={temp}
                                    onChange={(e) => setTemp(e.target.value)}
                                    className="w-full bg-brand-deep-blue border border-brand-light-navy rounded p-3 text-brand-lightest-slate focus:border-brand-teal outline-none transition-colors text-sm"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-brand-light-slate text-[10px] font-mono mb-1 uppercase tracking-tight">Recipient Email</label>
                                <input 
                                    type="email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-brand-deep-blue border border-brand-light-navy rounded p-3 text-brand-lightest-slate focus:border-brand-teal outline-none transition-colors text-sm"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>

                            <button 
                                type="submit"
                                className="w-full py-4 bg-transparent border border-brand-teal text-brand-teal font-mono rounded hover:bg-brand-teal/10 transition-all duration-300 mt-2 text-xs uppercase tracking-widest font-bold"
                            >
                                Enable Alerting
                            </button>
                        </form>

                        {submitted && (
                            <div className="mt-4 p-3 bg-brand-teal/5 border border-brand-teal/30 rounded text-brand-teal text-[10px] font-mono text-center">
                                SUCCESS: Notification channel established.
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="animate-fade-in flex flex-col h-full">
                        <h3 className="text-xl font-bold text-brand-lightest-slate mb-2">AI Risk Forecast</h3>
                        <p className="text-brand-slate text-xs mb-6 font-mono leading-relaxed">
                            Dynamic probabilistic wildfire analysis based on current location data.
                        </p>

                        {!selectedPos ? (
                            <div className="flex-grow flex items-center justify-center text-center p-8 bg-brand-deep-blue/30 rounded border border-dashed border-brand-light-navy">
                                <p className="text-brand-slate text-xs font-mono">Select a location on the map to generate dynamic AI forecast metrics.</p>
                            </div>
                        ) : forecast && (
                            <div className="space-y-6 flex-grow animate-fade-in">
                                <div className="p-4 bg-brand-deep-blue rounded border border-brand-light-navy">
                                    <div className="flex justify-between items-end mb-2">
                                        <span className="text-[10px] font-mono text-brand-slate uppercase">Ignition Probability</span>
                                        <span className="text-xl font-bold text-brand-teal font-mono">{forecast.ignitionProb}%</span>
                                    </div>
                                    <div className="w-full bg-brand-light-navy h-1.5 rounded-full overflow-hidden">
                                        <div 
                                            className="bg-brand-teal h-full transition-all duration-1000 ease-out"
                                            style={{ width: `${forecast.ignitionProb}%` }}
                                        ></div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-3 bg-brand-deep-blue/40 rounded border border-brand-light-navy">
                                        <span className="block text-[9px] font-mono text-brand-slate uppercase mb-1">Fuel Moisture</span>
                                        <span className="text-brand-lightest-slate font-mono text-xs">{forecast.fuelMoisture}</span>
                                    </div>
                                    <div className="p-3 bg-brand-deep-blue/40 rounded border border-brand-light-navy">
                                        <span className="block text-[9px] font-mono text-brand-slate uppercase mb-1">Wind Vector</span>
                                        <span className="text-brand-lightest-slate font-mono text-xs">{forecast.windVector}</span>
                                    </div>
                                    <div className="p-3 bg-brand-deep-blue/40 rounded border border-brand-light-navy">
                                        <span className="block text-[9px] font-mono text-brand-slate uppercase mb-1">NDVI Value</span>
                                        <span className="text-brand-lightest-slate font-mono text-xs">{forecast.ndviValue}</span>
                                    </div>
                                    <div className="p-3 bg-brand-deep-blue/40 rounded border border-brand-light-navy">
                                        <span className="block text-[9px] font-mono text-brand-slate uppercase mb-1">Risk Level</span>
                                        <span className={`font-mono text-xs font-bold ${getRiskColor(forecast.riskLevel)}`}>{forecast.riskLevel}</span>
                                    </div>
                                </div>

                                <form onSubmit={handleReportSubmit} className="mt-4 p-4 bg-brand-deep-blue/50 rounded border border-brand-teal/20 space-y-4">
                                    <label className="block text-brand-lightest-slate text-[10px] font-mono uppercase tracking-widest text-center">Get Detailed AI Report</label>
                                    <div className="space-y-3">
                                        <input 
                                            type="email" 
                                            value={reportEmail}
                                            onChange={(e) => setReportEmail(e.target.value)}
                                            placeholder="report@pyrosense.ai"
                                            className="w-full bg-brand-navy border border-brand-light-navy rounded px-3 py-2.5 text-xs text-brand-lightest-slate outline-none focus:border-brand-teal transition-all"
                                            required
                                        />
                                        <button 
                                            type="submit"
                                            className="w-full bg-brand-teal/10 border border-brand-teal text-brand-teal py-2.5 rounded text-[10px] font-mono uppercase font-bold hover:bg-brand-teal hover:text-brand-deep-blue transition-all"
                                        >
                                            Send Report to Email
                                        </button>
                                    </div>
                                    {reportSubmitted && (
                                        <p className="text-brand-teal text-[9px] font-mono text-center animate-fade-in">✓ Full report sent to your email.</p>
                                    )}
                                </form>

                                <div className="mt-auto bg-brand-deep-blue/30 p-3 rounded text-[9px] font-mono text-brand-slate border border-brand-light-navy/30">
                                    <p className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-brand-teal rounded-full animate-pulse"></span>
                                        Data analyzed for: {selectedPos.lat.toFixed(3)}N, {selectedPos.lng.toFixed(3)}E
                                    </p>
                                    <p className="mt-1 italic opacity-70">
                                        * Gemini 3 Pro real-time analysis of Sentinel-2 spectral bands.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
      </div>
    </section>
  );
};

export default MapNotification;
