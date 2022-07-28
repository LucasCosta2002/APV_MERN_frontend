import usePacientes from "../hooks/usePacientes"
import Paciente from "./Paciente"

const ListadoPacientes = () => {

	const { pacientes } = usePacientes()
	return (
		<>
			{ pacientes.length ? 
			(
				<>
					<h2 className="font-black text-3xl text-center">Pacientes registrados</h2>

					<p className="text-xl mb-10 mt-5 text-center">Administrá tus<span className="text-indigo-600 font-bold"> pacientes</span></p>
				
					{pacientes.map( paciente => (
						<Paciente
							key={paciente._id}
							paciente={paciente}
						/>
					))}
				</>
			) : 
			(
				<>
					<h2 className="font-black text-3xl text-center">No hay pacientes registrados</h2>

					<p className="text-xl mb-10 mt-5 text-center">Empezá agregando pacientes <span className="text-indigo-600 font-bold"> y aparecerán acá</span></p>
				</>
			)}
		</>
 	)
}

export default ListadoPacientes