import avatar01 from '../assets/imgs/avatar01.png'
import avatar02 from '../assets/imgs/avatar02.png'
import avatar03 from '../assets/imgs/avatar03.png'
import avatar04 from '../assets/imgs/avatar04.png'
import { UserType } from '../types'

export const userData: Map<number, UserType> = new Map()

userData.set(1, {id: 1, name: 'Mакар', username: 'belv74dev', avatar: avatar03})
userData.set(2, {id: 2, name: 'Женя', username: 'zacksnider', avatar: avatar01})
userData.set(3, {id: 3, name: 'Лиза', username: 'zacksnider', avatar: avatar02})
userData.set(4, {id: 4, name: 'Артур', username: 'zacksnider', avatar: null})
userData.set(5, {id: 5, name: 'Работяга', username: 'zacksnider', avatar: avatar04})
