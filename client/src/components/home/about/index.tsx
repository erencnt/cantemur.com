import Link from "next/link"

export default function About() {
    return (
        <section className="flex flex-col md:flex-row max-w-screen-lg mx-auto px-4 py-48">
            <div className="m-auto">
                {/* <Image /> */}
                {/* <Socials /> */}
            </div>
            <p className="m-auto">
                Lisans eğitimime <b>İstanbul Teknik Üniversitesi Bilgisayar ve Bilişim Fakültesi</b>'nde devam ediyorum. Şu anda <b>son sınıf</b> öğrencisiyim. Çeşitli alanlarda hobi projeleri geliştirmekteyim. <b className="underline text-blue-500"><Link href="https://jekirdek.com" target="_blank">Jekirdek Teknoloji</Link></b>'de <b>full-stack web developer</b> olarak çalışıyorum. 
            </p>
        </section >
    )
}