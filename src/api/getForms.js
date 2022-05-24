async function getForms () {
  const rawForms = await fetch('https://raw.githubusercontent.com/BuffelSaft/pokeemerald/master/src/data/pokemon/form_species_tables.h')
  const textForms = await rawForms.text()

  return textForms
}

export default getForms
