import Globe from "@/containers/globe";
import Map from "@/containers/map";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="w-screen h-screen bg-gradient-radial from-sky-950 to-black">
        <Globe />
        <Map />
      </div>
    </main>
  )
}
