import Image from 'next/image';

export default function ServiceCard({ title, description, imageSrc }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6">
        <Image 
          src={`/images/${imageSrc}`}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-xl font-bold text-center mb-4">{title}</h3>
      <p className="text-center text-gray-600 max-w-md">{description}</p>
    </div>
  );
}