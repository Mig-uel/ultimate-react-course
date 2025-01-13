import { getCountries } from '@/lib/data-service'

type Country = {
  name: string
  flag: string
}

async function SelectCountry({
  defaultCountry,
  name,
  id,
  className,
}: {
  defaultCountry: string
  name: string
  id: string
  className: string
}) {
  const countries = (await getCountries()) as Country[]
  const flag =
    countries.find((country) => country.name === defaultCountry)?.flag ?? ''

  return (
    <select
      name={name}
      id={id}
      // Here we use a trick to encode BOTH the country name and the flag into the value. Then we split them up again later in the server action
      defaultValue={`${defaultCountry}%${flag}`}
      className={className}
      key={defaultCountry}
    >
      <option value=''>Select country...</option>
      {countries.map((c) => (
        <option key={c.name} value={`${c.name}%${c.flag}`}>
          {c.name}
        </option>
      ))}
    </select>
  )
}

export default SelectCountry
