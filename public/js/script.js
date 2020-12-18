const html = {
  get(element) {
    return document.querySelector(element)
  }
}

html.get('#js-form_btn').addEventListener('click', (event) => {

  const select = html.get('#js-gender')
  const gender = select.options[select.selectedIndex].value
  const age = Number(html.get('#js-age').value)
  const height = Number(html.get('#js-height').value)
  const weight = Number(html.get('#js-weight').value)
  const activityLevel = Number(html.get('.selected').dataset.value)

  const tmb = (
    gender === 'famale'

    ?(655 + (9.6 * weight) + (1.8 * height) - (4.7 * age))
    :(66 + (13.7 * weight) + (5 * height) - (6.8 * age))
  )

  const maintenance = Math.round(tmb * (activityLevel))
  const loseweight = maintenance - 450
  const gainweight = maintenance + 450

  const layout = `
    <li> 
      Seu metabolismo basal é de <strong>${tmb}</strong>.
    </li>
    <li>
      Para manter seu peso voçê precisa consumir em média <strong>${maintenance} calorias</strong>.
    </li>
    <li>
      Para perder peso você precisa consumir em média <strong>${loseweight} calorias</strong>
    </li>
    <li>
      Para ganhar peso você precisa consumir em média <strong>${gainweight} calorias</strong>
    </li>
  `

  html.get('.result__list').innerHTML = layout

  toggleClasses()
  event.preventDefault()
})

html.get('#js-back').addEventListener('click', toggleClasses)

function toggleClasses() {
  html.get('.content').classList.toggle('active')
  html.get('.result').classList.toggle('active')
}


const levels = document.querySelectorAll('.grid_opt li')

for (const level of levels) {
  level.addEventListener('click', () => {
    getLevel(level.getAttribute('id'))
  })
}

function getLevel(id){

  for (const level of levels) {
    level.classList.remove('selected')
  }

  document.querySelector(`#${id}`)
    .classList.toggle('selected')
}
