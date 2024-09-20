export default function Hero({ image }: { image: string }) {
  return (
    <div className="h-[740px] bg-background overflow-hidden relative">
      <img
        className="absolute object-center object-cover w-full h-full"
        src={image}
        alt="hero image"
      />
    </div>
  );
}
