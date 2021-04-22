import React from 'react'
import Card from '../components/card/card'
import Page from '../components/page/page'
import Main from '../components/main/main'
import { useIntl } from 'react-intl';


export default function CarryConditions() {
    const { formatMessage: f } = useIntl(); 

    return (
   
            <Page className='bg-bg pt-lg fh'>
                <Main style={{flexBasis:'100%'}}>
                    <Card>
                        <Card.Header className='pt-sm ml-sm' text={f({id:'curry-cand'})} />
                        <Card.Body>
                         
                            <p>Şirkətimiz məhsulun keyfiyyətinə və orijinallığına, məhsulun mağazanın ambarında olub-olmamasına, məhsulu sifariş verdiyiniz mağazadan vaxtında çatdırılmasına
                            görə məsuliyyət daşımır. Bağlama xarici anbara daxil olduqdan sonra, geri mağazaya iade edilmir. Yalnız Azərbaycana daşınması qadağan olan məhsullar geri
                            mağazaya qaytarıla bilər. “Daşıyıcı” xarici anbarlarında bağlamaları təhvil alarkən üzərində qırılabilən əşya olduğuna dair etiket (label) olan bağlamaların daxilindəki
                            məhsulların zədələnib-zədələnmədiyini yoxlayır. Üzərində qırılabilən əşya olduğuna dair etiket (label) olmayan bağlamaların tərkibindəki məhsulların qırılması,
                            əzilməsi, zədələnməsi kimi hallarda “Daşıyıcı” heç bir məsuliyyət daşımır. Sifariş əsasında daşınan bağlamadakı əşyanın qüsurlu olmasına, məhsulun ölçüsünün,
                            rənginin, çeşidinin və s. səhv gəlməsinə görə “Daşıyıcı” heç bir məsuliyyət daşımır. Bu kimi hallarda sifarişçi problemin aradan qaldırması üçün iradını ancaq satıcı
                            mağazaya bildirə bilər. Sifarişlərinizi növbəli şəkildə yerinə yetiririk. Sifariş vermə prosesində hər hansı bir problem yaranarsa (məhsulun müddətinin sona çatması,
                            müəyyən bir kampaniyanın başa çatması, ödənişin həyata keçirilməsində problemlərin yaranması və s.), məhsul və xidmətlər üçün ödənilən məbləği sizə
                            qaytaracağıq.
                            </p>
                            <p>
                                Ödəniş etdiyiniz məbləğ 3-5 iş günü ərzində kartınıza köçürüləcəkdir. Məhsulların sifarişi və çatdırılması yalnız məhsul və xidmətlərin dəyəri istifadəçi tərəfindən
                                ödənildikdən sonra həyata keçirilir.
                            </p>
                            <p>Əgər məhsullar mağazadan anbarımıza ayrı bağlamalarda gəlsə, hər bir bağlama üçün çatdırılma dəyəri ayrıca hesablanacaq. 166 Cargo-nun bağlamaların
                            birləşdirilməsi xidmətini həyata keçirmir. Satıcı firma Sizin sifarişlərinizi bizim xaricdəki anbara necə təqdim edirsə, biz də məhsulları eynilə Sizə çatdırırıq. Məhsullar
                            ofisimizə çatdırıldıqda müştəriyə sms və ya elektron poçt vasitəsilə bildiriş gələcək. Bağlamanı ofisimizdən özünüz götürə bilərsiniz və ya ünvana çatdırılma
                            xidmətimizdən yararlana bilərsiniz.
                            </p>
                            <p>Daşınma zamanı bağlamanın həcm çəkisi ilə fiziki çəkisi arasında fərq 15 kiloqramdan çox olarsa, daşınma haqqı ən yüksək olan çəki göstəricisi əsasında
                            hesablanacaqdır. Beynəlxalq Hava Nəqliyyatı Assosiasiyasının metrik standartlara uyğun olaraq, daşınan yüklərin çəkisi bağlamaların ölçülərindən asılı olaraq, iki cür
                            hesablana bilər:
                            </p>
                            <p>1) Fiziki çəki;
                            </p>
                            <p>2) Həcm çəkisi</p>
                            <p>Bağlamaların ölçüləri böyük olduqda (təyyarədə daha çox yer tutduğuna görə), əvvəlcə hər iki çəki hesablanır, daha sonra göstəricisi böyük olan çəki daşınma çəkisi
                             kimi seçilir.</p>
                            <p>Məhsulların çatdırılma ödənişi tariflərə uyğun, çəkidən asılı olaraq hesablanır. Əgər sifarişinizin ölçüsü 80 santimetrdən çox olarsa, tarifin hesablanması üçün həcm
                            çəkisi tətbiq olunacaq. Türkiyədən gələn, ölçüsü 80 snatimetrdən çox olan məhsulların çatdırılma dəyəri aşağıdakı üsulla hesablanır:
                             </p>
                            <p>(Eni (m) x Hündürlük (m) x Uzunluq (m)) / 0.006)
                             </p>
                            <p>Əgər ABŞ-dan gələn məhsul 100 sm-dən çox olan məhsulların çatdırılma dəyəri aşağıdakı üsulla hesablanır:
                             </p>
                            <p>(Eni (m) x Hündürlük (m) x Uzunluq (m)) / 0.006)
                             </p>
                            <p>Məhsulların zədələnməsi ilə əlaqəli problemlərin qarşısını almaq üçün, məhsulu ofisimizdə və ya çatdırılma zamanı kuryerin yanında yoxlayın. Əks təqdirdə,
                            məhsulunuzun zədələnməsinə görə cavabdeh deyilik. Azərbaycan Respublikasının qanunvericiliyinə əsasən (Nazirlər Kabinetinin qəbul etdiyi 305 №-li qərarın
                            2.1.4-cü bəndini rəhbər tutaraq), fiziki şəxslər 30 gün müddətində fiziki dəyəri 300 ABŞ dolları ekvivalentindən artıq olmayan məhsulları sifariş edə bilər. Fiziki dəyəri
                            300 dolları keçərsə, qanuna uyğun olaraq gömrük rüsumu ödənilir.
                            </p>
                            <p>300 ABŞ dolları limitinə məhsulun dəyəri və daşınma haqqı daxildir. Dəyəri limitdən artıq olan bağlamalar səlahiyyətli orqan tərəfindən gömrükdə saxlanılır. Fiziki
                            dəyər 300 ABŞ dollarından çox olduqda, qanunveriliciyə uyğun olaraq 36%-dək gömrük rüsumu ödənilir. Azərbaycan Respublikasına idxalı qadağan olunmuş
                            məhsulların çatdırılmasını həyata keçirmirik.</p>
                        </Card.Body>
                    </Card>
                </Main>
            </Page>
  
    )
}
