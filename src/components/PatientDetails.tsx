import { Patient } from "../types"

type PatientDetailsProps = {
    patient: Patient
} 

export default function PatientDetails({patient} : PatientDetailsProps) {
  return (
    <div>
        <p>{patient.name}</p>
    </div>
  )
}
