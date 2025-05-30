"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaPlay, FaTimes } from "react-icons/fa";

const PrincipalDesk = () => {
  const desks = [
    {
      title: "Chairman's Desk",
      name: "Hon’ble Chandrakant Narayan Dalvi, IAS(Retd)",
      description:
        "आधुनिक शिक्षण भगीरथ पद्मभूषण डॉ. कर्मवीर भाऊराव पाटील यांनी ग्रामीण भागात राहणाऱ्या गोरगरीब, पीडित आति बंचित समाजातील मुलांच्या शैक्षणिक उत्थानासाठी सन १९१९ मध्ये रयत शिक्षण संस्थेची स्थापना केली.रयत शिक्षण संस्थेने नेहमीच विद्यार्थ्यांच्या संख्यात्मक विकासाबरोबरच गुणात्मक विकासाला प्राधान्य दिले आहे.",
      fullText: ` त्यासाठी आवश्यक असणाऱ्या भौतिक सुविधा आणि कुशल मनुष्यबळ पुरविण्यात सातत्याने प्राधान्य दिले आहे.शालेय स्तरावर गुरुकुल प्रकल्प, संगणक कक्ष, विज्ञान प्रयोगशाळा, स्पर्धा परीक्षा मार्गदर्शन, इंग्रजी संभाषण वर्ग इत्यादींच्या माध्यमातून प्रज्ञावंत विद्यार्थी घडवला जात आहे. उच्च शिक्षण क्षेत्रात पारंपरिक अभ्यासक्रमाबरोबरच कौशल्यधिष्ठित अभ्यासक्रमावर भर देऊन विद्यार्थ्यांना स्वावलंबी करण्याचा सातत्याने प्रयत्न सुरू आहे. महाविद्यालयीन पातळीवर राष्ट्रीय शैक्षणिक धोरण २०२० प्रभावीपणे राबविण्यात संस्था आघाडीवर आहे. समाजाच्या आणि विद्याव्यांच्या गरजा ओळखून संस्थेने यावर्षी शैक्षणिक क्षेत्रात केलेल्या विशेष प्रयत्नांची निष्पत्ती म्हणजे विद्यार्थ्यांनी स्पर्धा परीक्षांमध्ये संपादन केलेले यश, तसेच क्रीडा स्पर्धेतील यश सुद्धा नोंद घेण्यासारखे आहे. 
      महाविद्यालयीन स्तरावर राष्ट्रीय मूल्यांकन आणि अधिस्वीकृती समिती, बेंगलोर या संस्थेकडून आपल्या संस्थेतील अनेक महाविद्यालयाचे यावर्षी मूल्यमापन झाले आणि त्यामध्ये मिळालेले यश अत्यंत समाधानकारक आणि उच्च शिक्षणातील रयत शिक्षण संस्थेचे योगदान अधोरेखित करणारे अशा स्वरूपाचे आहे.
       अनेक महाविद्यालयांना 'A++' हे सर्वोत्कृष्ट मानांकने प्राप्त झाले आहे. अनेक महाविद्यालयांना 'A+' आणि 'A' ही मानांकने प्राप्त झालेली आहे. अशा स्वरूपाचे मानांकन प्राप्त झालेली आहेत.
       रयत शिक्षण संस्थेचे अध्यक्ष मा. खा. शरदरावजी पवारसाहेब यांच्या मार्गदर्शनाखाली सर्व क्षेत्रात संस्थेचा गुणात्मक विकास होत आहे.
       संस्थेचे उपाध्यक्ष मा. सौ. जयश्री चौगुले, मा. अरुण कडू-पाटील, मा. पी.जे.पाटील, मा. महेंद्र लाड, मा. ॲड. राम कांडगे, संस्थेचे व्हा. चेअरमन मा. ॲड. भगीरथ शिंदे, संस्थेचे संघटक मा. डॉ. अनिल पाटील, सर्व विभागांचे चेअरमन, मॅनेजिंग कौन्सिलचे सदस्य, जनरल बॉडीचे सदस्य यांचेदेखील संस्थेच्या विकासामध्ये बहुमोल मार्गदर्शन लाभत असते. 
       संस्थेच्या विकासासाठी सदैव कार्यमग्न असणारे संस्थेचे सचिव मा. विकास देशमुख, सहसचिव प्रिं. डॉ. शिवलिंग मेनकुदळे, श्री. बी.एन.पवार, प्रिं. डॉ. राजेंद्र मोरे हे माझे सहकारी संस्थेच्या प्रगतीसाठी अखंडपणे कार्य करत आहेत. त्यांचे योगदान संस्थेच्या प्रगतीसाठी अत्यंत महत्त्वाचे आहे, असे मला वाटते. त्याचबरोबर सर्व विभागीय अधिकारी, शिक्षक, प्राध्यापक, संस्था हितचिंतक, पालक व विद्यार्थी या सर्वांप्रति मी कृतज्ञता व्यक्त करतो आणि माझ्या मनोगताला पूर्णविराम देतो. 
धन्यवाद...!`,
      image: "/images/CHAIRMAN.jpg",
    },
    {
      title: "Secretary's Desk",
      name: "Hon’ble Shri. Vikas Deshmukh, IAS(Retd)",
      description:
        "शिक्षण हाच बहुजन समाजाच्या उद्धाराचा एकमेव मार्ग आहे, हे ओळखून पद्मभूषण डॉ. कर्मवीर भाऊराव पाटील यांनी शिक्षण संस्थेची स्थापना केली. एका वसतिगृहाच्या स्थापनेतून उभी राहिलेली ही संस्था आज दीपस्तंभाप्रमाणे महाराष्ट्र व कर्नाटक या राज्यांत शैक्षणिक कार्य करत आहे.",
      fullText: `सन २०२४-२५ या वर्षामध्ये संस्थेचे अनेक पदाधिकारी व अधिकारी यांची विविध पदांवर निवड झाली आहे, तसेच त्यांर अनेक संस्थांकडून प्रतिष्ठित पुरस्काराने सन्मानित करण्यात आलेले आहे. संस्थेचे संघटक मा. डॉ. अनिल पाटील यांचा शैक्षणिर क्षेत्रातील योगदानासाठी 'छत्रपती शाहू महाराज पिलर ऑफ एज्युकेशन' व 'एसजीयू आयकॉन' पुरस्काराने गौरव करण्यात आल आहे. संस्थेचे जनरल बॉडी सदस्य मा. सुप्रियाताई सुळे व मा. निलेश लंके यांची लोकसभा सदस्य म्हणून निवड झाली आहे.तसेच संस्थेचे मॅनेजि भग कौन्सिल सदस्य मा. दिलीप वळसे पाटील व मा. डॉ. विश्वजित कदम यांची महाराष्ट्र विधानसभा सदस्य म्हणून सार्थ निवड झाली उन आहे. संस्थेचे थोर देणगीदार व मॅनेजिंग कौन्सिल सदस्य मा. रामशेठ ठाकूर यांना कॉ.पी.बी. कडू-पाटील समाजक्रांती पुरस्काराने से सन्मानित करण्यात आले आहे. संस्थेच्या मॅनेजिंग कौन्सिल सदस्या मा. मीनाताई जगधने यांना समाजिक व शैक्षणिक कार्यासाठी 
'लक्ष्मीबाई भाऊराव पाटील पुरस्कार' प्रदान करण्यात आला. संस्थेचे मॅनेजिंग कौन्सिल सदस्य व दक्षिण विभागाचे चेअरमन मा. डॉ. मुनताजअली बाशुमियाँ शेख यांची डी. वाय. पाटील एज्युकेशन सोसायटी, कोल्हापूर येथे प्रोफेसर ऑफ प्रॅक्टिस पदावर निवड झाली आहे. तसेच मध्य विभागाचे विभागीय चेअरमन मा. संजीव पाटील यांची महाराष्ट्र चेंबर ऑफ कॉमर्स या संस्थेच्या सदस्यपदी बिनविरोध निवड झाली आहे. संस्थेच्या रायगड विभागाचे चेअरमन मा. बाळाराम पाटील यांचा 'उत्कृष्ट भाषण पुरस्कार' व 'लोकमत लोकनेता' पुरस्कारांनी गौरव करण्यात आला आहे. पश्चिम विभागाचे विभागीय चेअरमन मा. चेतनदादा तुपे  विधानसभा सदस्यपदी निवड झाली आहे, तसेच त्यांना 'उत्कृष्ट संसदपटू' पुरस्काराने सन्मानित करण्यात आले आहे 
संस्थेचे अध्यक्ष मा. खासदार शरदरावजी पवार, सर्व उपाध्यक्ष, चेअरमन मा. चंद्रकांत दळवी, व्हाईस चेअरमन मा. ॲड. भगीरथ शिंदे, संघटक मा. डॉ. अनिल पाटील, जनरल बॉडी सदस्य, मॅनेजिंग कौन्सिल सदस्य यांच्या मार्गदर्शनाखाली संस्था उत्कृष्टाकडे वाटचाल करत आहे. या वाटचालीमध्ये संस्थेचे सहसचिव, विभागीय अधिकारी, आजीव सदस्य, आजीव सेवक, रयत -सेवक, संस्था हितचिंतक, कार्यकर्ते, व देणगीदार यांचे अमूल्य योगदान लाभत आहे. 
रयत शिक्षण संस्थेचा हा वार्षिक अहवाल संपादन करण्यासाठी मा. प्रिं. डॉ. शिवलिंग मेनकुदळे (सहसचिव, उच्च शिक्षण), - मा. बी.एन. पवार (सहसचिव, माध्यमिक शिक्षण), मा. प्रिं. डॉ. राजेंद्र मोरे (सहसचिव, ऑडिट), सर्व अहवाल समिती सदस्य, कार्यालयीन सेवक या सर्वांचे सहकार्य लाभले, त्याबद्दल मी सर्वांचे आभार व्यक्त करतो. पुढील शैक्षणिक कार्यासाठी सर्वांना 
- शुभेच्छा !  `,
      image: "/images/SECRETY.jpeg",
    },
  ];

  const [selectedDesk, setSelectedDesk] = useState(null);

  const handleReadMore = (desk) => {
    setSelectedDesk(desk);
  };

  const closeModal = () => {
    setSelectedDesk(null);
  };

  return (
    <section className="bg-gradient-to-br py-6">
      <div className="flex items-center justify-center w-full mb-5">
        <hr className="border border-black w-1/4" />
        <Image src="/images/logohr.png" alt="logo" width={60} height={50} className="mx-4" />
        <hr className="border border-black w-1/4" />
      </div>
      <h2 className="text-4xl font-bold text-black text-center">
        Chairman & Secretary Desk
      </h2>
      <br />

      <div className="flex flex-col md:flex-row justify-center gap-10 max-w-7xl mx-auto px-4">
        {desks.map((desk, index) => (
          <div
            key={index}
            className="relative group bg-white rounded-2xl shadow-2xl p-8 w-full md:w-1/2 hover:shadow-indigo-200 transition-all duration-300"
          >
            <span className="absolute left-0 top-0 h-full w-1 bg-indigo-300 rounded-tr-xl rounded-br-xl"></span>
            <div className="flex items-center gap-6 mb-4">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-indigo-200 shadow-md">
                <Image
                  src={desk.image}
                  alt={desk.title}
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{desk.title}</h3>
                <p className="text-sm text-gray-600">{desk.name}</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">{desk.description}</p>
            <div
              onClick={() => handleReadMore(desk)}
              className="flex items-center cursor-pointer text-teal-900 hover:underline transition duration-200"
            >
              <FaPlay className="mr-2 group-hover:animate-pulse" />
              <span className="font-medium">Read More</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedDesk && (
        <div className="fixed inset-0 flex justify-center items-center z-50 px-4 backdrop-blur-sm bg-white/30">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full p-8 relative animate-fade-in border border-gray-300">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-600 transition text-xl"
            >
              <FaTimes />
            </button>
            <div className="flex items-center gap-6 mb-4">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-indigo-200">
                <Image
                  src={selectedDesk.image}
                  alt={selectedDesk.title}
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{selectedDesk.title}</h3>
                <p className="text-sm text-gray-600">{selectedDesk.name}</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {selectedDesk.fullText}
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default PrincipalDesk;
