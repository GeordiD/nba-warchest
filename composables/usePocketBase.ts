import PocketBase from 'pocketbase'

const pb = new PocketBase('http://127.0.0.1:8090')

export const setupPocketBase = async () => {
  await pb.admins.authWithPassword('geordi.dosher@gmail.com', 'testing1234')
}

export const usePocketBase = () => {
  return pb
}
