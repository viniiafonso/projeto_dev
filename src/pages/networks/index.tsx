import { useState , FormEvent, useEffect} from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/input";
import { db } from "../../services/firebaseConnection"
import {
   setDoc,
   doc,
   getDoc     
} from 'firebase/firestore'

export function Networks() {
    const [rede1, setRede1] = useState("")
    const [rede2, setRede2] = useState("")
    const [rede3, setRede3] = useState("")

    function handleRegister(e: FormEvent){
        e.preventDefault();

        setDoc(doc(db, "social", "link"),{
           link1: rede1,
           link2: rede2,
           link3: rede3     
        })
    }

    useEffect(() => {
        function loalLinks() {
            const docRef = doc(db, "social", "link")
            getDoc(docRef)
                .then((snapshot) => {
                    if (snapshot.data() !== undefined) {
                        setRede1(snapshot.data()?.rede1)
                        setRede2(snapshot.data()?.rede2)
                        setRede3(snapshot.data()?.rede3)
                    }
                })
        }
        loalLinks();
    }, [])

    return (
        <div className="flex items-center flex-col min-h-screen pb-7 px-2">
            <Header />
            <h1 className="text-white text-2xl font-medium mt-8 mb-4">Minhas redes sociais</h1>

            <form className="flex flex-col max-w-xl w-full" onSubmit={handleRegister}>
                <label className="text-white font-medium mt-2 mb-2">Link 1</label>
                <Input
                    type="url"
                    placeholder="Digite a url da rede social..."
                    value={rede1}
                    onChange={(e) => setRede1(e.target.value)}
                />

                <label className="text-white font-medium mt-2 mb-2">Link 2</label>
                <Input
                    type="url"
                    placeholder="Digite a url da rede social..."
                    value={rede2}
                    onChange={(e) => setRede2(e.target.value)}
                />

                <label className="text-white font-medium mt-2 mb-2">Link 3</label>
                <Input
                    type="url"
                    placeholder="Digite a url da rede social..."
                    value={rede3}
                    onChange={(e) => setRede3(e.target.value)}
                />

                <button 
                    type="submit"
                    className="text-white bg-blue-600 h-9 rounded-md items-center justify-center flex mb-7 font-medium"
                >
                 Salvar links       
                </button>
            </form>
        </div>
    )
}