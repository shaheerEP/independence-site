'use client'
import { useState, useEffect } from 'react'

export default function WelcomeModal() {
  const [isClient, setIsClient] = useState(false)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    setIsClient(true)
    setShowModal(true)
  }, [])

  const handleClose = () => {
    setShowModal(false)
  }

  // Don't render anything on server-side to avoid hydration mismatch
  if (!isClient) {
    return null
  }

  if (!showModal) {
    return null
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="text-right" dir="rtl">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              مرحبًا بكم
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4 mb-6">
              <p>
                مرحبًا بكم في ساحة الشيخ أبوبكر! هذا الموقع أنشئ خصيصًا لتسليط الضوء على مساهمات المسلمين في استقلال الهند.
              </p>
              <p>
                يقدم الموقع نظرة سريعة وواضحة عن دورهم البارز في رحلة الحرية، مما يعزز فهمنا لتاريخ الوطن وقيمه المشتركة.
              </p>
              <p>
                باستخدام هذا الموقع، ستتعرفون على المساهمات الكبيرة للمسلمين في استقلال الهند، مما يعزز الوعي بتاريخنا المشترك ويقوي روح الوحدة بين جميع أفراد المجتمع. الموقع يساعدكم على فهم التأثير الحقيقي لهذه المساهمات في بناء وطن حر ومزدهر.
              </p>
              <p>
                زوروا موقعنا
              </p>
            </div>
            <button
              onClick={handleClose}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}