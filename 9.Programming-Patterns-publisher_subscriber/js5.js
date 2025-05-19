smallDiv = document.getElementById('small')
mediumDiv = document.getElementById('medium')
bigDiv = document.getElementById('big')
link = document.getElementById('linkId')


const handler1 = e => {
    e.stopPropagation()
    console.log('target', e.target.id)
    console.log('currentTarget', e.currentTarget.id)
}

const handler2 = e => {
    e.preventDefault()
    console.log('target', e.currentTarget.id)
    console.log('currentTarget', e.target.id)
}

smallDiv.addEventListener('click', handler1)
mediumDiv.addEventListener('click', handler1)
bigDiv.addEventListener('click', handler1)

link.addEventListener('click', handler2)