export function Calculo({operacao, resultado}) {
    return(
    <div className="w-full h-full flex flex-col gap-4 border border-blue-600 p-2">
        <h2 className="text-green-400 font-semibold">{operacao}</h2>
        <p className="text-white">{resultado}</p>
    </div>
    )
}