export default function Button({ children }: { children: React.ReactNode }) {
  const innerText = children?.toString() || '';

  return (
    <button className="relative rounded-md child:hover:before:opacity-100">
      <div className="before:opacity-0 before:h-[calc(100%+2px)] before:w-[calc(100%+2px)] before:animate-spin-spiral before:duration-300 before:absolute before:z-[-1] before:bg-spiral-highlight before:rounded-md before:-left-px before:-top-px before:transition-all">
        <div className="bg-black ring-[1px] ring-solid ring-white/10 hover:ring-transparent transition-colors flex justify-center rounded-md items-center text-xs uppercase font-semibold z-0 w-fit px-6 py-3">
          {innerText}
        </div>
      </div>
    </button>
  );
}
