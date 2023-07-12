
import Image from 'next/image'
export default function Home() {
  const bookWidget = `
  <div class="ownerrez-widget" data-propertyId="4cace0d1e8f44b069667db5417cb7758" data-widget-type="Booking/Inquiry" data-widgetId="f629c188734b4d1fb0a6d1f039ad19d3"></div>
  <script src="https://secure.ownerreservations.com/widget.js"></script>
  `
  return (
    <div>
      <div className="min-h-screen">
      <figure>
        <div className="absolute inset-0">
        <Image
      src="/DSC05327.jpg"
      className="object-cover h-full"
      width={1500}
      height={1000}
      alt="Picture of the author"
    /> 
          </div> 
        
      </figure>        
  </div>
Oda choca loca
    </div>
  )
}
