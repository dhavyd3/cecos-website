"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n/context";

interface Office {
  name: string;
  lat: number;
  lng: number;
  address: string;
}

interface OfficeMapProps {
  className?: string;
}

export function OfficeMap({ className }: OfficeMapProps) {
  const { t } = useI18n();
  const [activeOffice, setActiveOffice] = useState<"hq" | "branch">("hq");
  const [mapReady, setMapReady] = useState(false);
  const [MapContainer, setMapContainer] = useState<React.ComponentType<any> | null>(null);
  const [TileLayer, setTileLayer] = useState<React.ComponentType<any> | null>(null);
  const [Marker, setMarker] = useState<React.ComponentType<any> | null>(null);
  const [Popup, setPopup] = useState<React.ComponentType<any> | null>(null);
  const [icon, setIcon] = useState<any>(null);

  const offices: Record<"hq" | "branch", Office> = {
    hq: {
      name: t.contact.info.headquarters,
      lat: -3.3822,
      lng: 29.3644,
      address: t.contact.info.headquartersAddress,
    },
    branch: {
      name: t.contact.info.branch,
      lat: 46.2088,
      lng: 6.1371,
      address: t.contact.info.branchAddress,
    },
  };

  const current = offices[activeOffice];

  useEffect(() => {
    // Dynamically import leaflet + react-leaflet to avoid SSR issues
    (async () => {
      const L = await import("leaflet");
      const RL = await import("react-leaflet");

      // Fix default marker icon issue with webpack/next
      const markerIcon = L.icon({
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });

      setMapContainer(() => RL.MapContainer);
      setTileLayer(() => RL.TileLayer);
      setMarker(() => RL.Marker);
      setPopup(() => RL.Popup);
      setIcon(markerIcon);
      setMapReady(true);
    })();
  }, []);

  return (
    <div className={cn("space-y-4", className)}>
      {/* Office switcher tabs */}
      <div className="flex rounded-xl bg-accent/50 border border-border p-1">
        <button
          onClick={() => setActiveOffice("hq")}
          className={cn(
            "flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all duration-200",
            activeOffice === "hq"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          Bujumbura
        </button>
        <button
          onClick={() => setActiveOffice("branch")}
          className={cn(
            "flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all duration-200",
            activeOffice === "branch"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          Genève
        </button>
      </div>

      {/* Map */}
      <div className="relative w-full h-[350px] rounded-2xl overflow-hidden border border-border">
        {mapReady && MapContainer && TileLayer && Marker && Popup ? (
          <MapComponentWrapper
            key={activeOffice}
            MapContainer={MapContainer}
            TileLayer={TileLayer}
            Marker={Marker}
            Popup={Popup}
            icon={icon}
            center={[current.lat, current.lng]}
            name={current.name}
            address={current.address}
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-accent/30">
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              <span className="text-sm">Loading map...</span>
            </div>
          </div>
        )}
      </div>

      {/* Address label */}
      <p className="text-sm text-muted-foreground text-center">
        <span className="font-medium text-foreground">{current.name}</span>
        {" — "}
        {current.address}
      </p>
    </div>
  );
}

function MapComponentWrapper({
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  icon,
  center,
  name,
  address,
}: {
  MapContainer: React.ComponentType<any>;
  TileLayer: React.ComponentType<any>;
  Marker: React.ComponentType<any>;
  Popup: React.ComponentType<any>;
  icon: any;
  center: [number, number];
  name: string;
  address: string;
}) {
  return (
    <MapContainer
      center={center}
      zoom={15}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
      className="z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center} icon={icon}>
        <Popup>
          <div className="text-sm">
            <strong>{name}</strong>
            <br />
            {address}
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
