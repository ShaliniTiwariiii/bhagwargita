import {atom} from 'recoil'

export const bgAtom = atom ({
    key:'bgfromAtom',
    default:''
})

export const  colorAtom = atom({
    key:'coloratom',
    default:''
})

export const modeAtom =atom({

    key:'modeatom',
    default:false
})

export const completedAtom =atom({
    key:'comAtom',
    default: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
})