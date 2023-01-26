const cadastro = document.getElementById('cadastro')
const relatorio = document.getElementById('relatorio')
const user = document.getElementById('nomeUsuario')
const senha = document.getElementById('senhaUsuario')
const form = document.querySelector('form')

form?.addEventListener('submit', (event) => {
  event.preventDefault()
  if (user.value == 'user' && senha.value == 'senha') {
    localStorage.setItem('estaLogado', true)
    window.location.replace('./index.html')
  } else {
    loginNegado()
  }
})

function loginNegado() {
  const toast = document.getElementById('toast')
  const toastTitle = document.getElementById('toastTitle')
  const toastDescription = document.getElementById('toastDescription')
  toastTitle.innerText = 'Informações inválidas!'
  toastDescription.innerText = 'Usuário e/ou senha incorreto(s)'
  toast.classList.add('show')
  user.classList.add('error')
  senha.classList.add('error')

  setTimeout(() => {
    toast.classList.remove('show')
  }, 3000)
}

user?.addEventListener('input', () => {
  user.classList.remove('error')
  senha.classList.remove('error')
})
senha?.addEventListener('input', () => {
  senha.classList.remove('error')
  user.classList.remove('error')
})

function verificaLogin() {
  if (localStorage.getItem('estaLogado') !== 'true') {
    window.location.replace('./login.html')
  }
}

function deslogar() {
  localStorage.removeItem('estaLogado')
  window.location.replace('./login.html')
}
