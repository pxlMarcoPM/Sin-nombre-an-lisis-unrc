
import React, { useRef } from 'react';

interface ImageWithCaptionProps {
  src: string;
  caption: string;
  index: number;
  onImageChange: (index: number, newSrc: string) => void;
}

const ImageWithCaption: React.FC<ImageWithCaptionProps> = ({ src, caption, index, onImageChange }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleOverlayClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          onImageChange(index, e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <figure className="group relative">
      <div className="overflow-hidden rounded-lg">
        <img 
          src={src} 
          alt={caption} 
          className="w-full h-auto object-cover aspect-[3/2] transform transition-transform duration-500 group-hover:scale-105" 
        />
        <div 
          className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          onClick={handleOverlayClick}
          onKeyDown={(e) => e.key === 'Enter' && handleOverlayClick()}
          role="button"
          tabIndex={0}
          aria-label="Cambiar imagen"
        >
          <div className="text-center text-white p-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.776 48.776 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
            </svg>
            <p className="mt-2 text-sm font-semibold">Cambiar imagen</p>
          </div>
        </div>
      </div>
      <input 
        type="file" 
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/png, image/jpeg, image/webp"
      />
      <figcaption className="mt-3 text-sm text-slate-400 leading-snug italic text-justify">
        {caption}
      </figcaption>
    </figure>
  );
};

export default ImageWithCaption;