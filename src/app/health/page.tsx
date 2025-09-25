import HealthReminder from "@/components/HealthReminder";
import ProfilOption from "@/components/ProfilOption";
import optionsData from "@/data/options.json"

export default function Page () {
    return(
        <main className=" flex flex-col gap-6 p-3 ">
             
             <h1 className="big-title">Caroline L. </h1>
             <h1 className="big-title">Voici votre espace santé</h1>



             <div className=" flex flex-col gap-4" >


                <div className="flex justify-between  ">
                    <p className=" text-blue-dark font-bold text-sm">Rappels santé</p>
                    <a href="#" className=" text-blue-dark font-bold text-sm">Voir tout (3)</a>

                </div>

                        <HealthReminder image="/images/doctors/doctor1.jpg"  title="Prenez soin de vos dents, consultez votre dentiste" description="Recommandé une fois par an"/>


             </div>













             <div className=" flex flex-col gap-4">

                    <p className=" text-blue-dark font-bold text-sm">Profil santé</p>





                    <div className=" flex flex-col gap-4">



                        {optionsData.map((opt,index) => (
                            <ProfilOption key={index} title={opt.title} image={opt.image } />
                        ))}


                        
                

             </div>
                

             </div>

        </main>
    )
}