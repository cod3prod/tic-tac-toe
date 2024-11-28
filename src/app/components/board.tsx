import Square from "./square"

export default function Board() {
  return (
    <section className="mx-auto w-full aspect-square grid grid-cols-3 grid-rows-3 gap-2">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
    </section>
  )
}