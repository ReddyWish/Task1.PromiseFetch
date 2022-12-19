const users = 'https://jsonplaceholder.typicode.com/users'

const toggleLoader = () => {
    const loaderHtml = document.querySelector('#loader')
    const isHidden = loaderHtml.hasAttribute('hidden')
    if (isHidden) {
        loaderHtml.removeAttribute('hidden')
    } else {
        loaderHtml.setAttribute('hidden', '')
    }
}

toggleLoader()

const listOfUsers = fetch(users, {
    method: 'GET',
})



listOfUsers
    .then((response) => {
        if (!response.ok) {
            throw new Error('smth wrong...')
        }
        return response.json()
    })
    .then((users) => {
        users.forEach(user => {
            const userHTML = userElement(user.name)
            containerWithUsers.append(userHTML)
        })
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        toggleLoader()
    })


const userElement = (text) => {
    const liUser = document.createElement('li')
    const liUser_anchor = document.createElement('a')
    liUser_anchor.href = '#'
    liUser_anchor.textContent = text
    liUser.append(liUser_anchor)
    return liUser
}

const containerWithUsers = document.querySelector('#data-container')



