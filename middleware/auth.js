export default function ({ $auth, redirect, route }) {
  // Permitir rutas públicas
  const isPublic = route.path.startsWith('/auth') || route.path === '/'

  // Si el usuario NO está autenticado y la ruta NO es pública, redirige
  if (!$auth.loggedIn && !isPublic) {
    return redirect('/')
  }
}

//export default function ({ $auth, redirect }) {
//  if (!$auth.loggedIn) {
//    return redirect('/')
//  }
//}
