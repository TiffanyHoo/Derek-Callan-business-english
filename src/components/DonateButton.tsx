import { useState } from 'react'
import { Heart, X } from 'lucide-react'

export default function DonateButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-pink-500 to-rose-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
        aria-label="Support us"
      >
        <Heart className="w-6 h-6 group-hover:animate-pulse" fill="white" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-pink-100 rounded-full mb-3">
                <Heart className="w-6 h-6 text-pink-500" fill="currentColor" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">请作者喝杯咖啡</h3>
              <p className="text-sm text-gray-500 mt-1">如果这个应用对你有帮助，欢迎支持一下</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="bg-gray-50 rounded-xl p-3 mb-2">
                  <img
                    src="/images/alipay.jpg"
                    alt="支付宝二维码"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700">支付宝</span>
              </div>
              <div className="text-center">
                <div className="bg-gray-50 rounded-xl p-3 mb-2">
                  <img
                    src="/images/wechat.jpg"
                    alt="微信支付二维码"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700">微信支付</span>
              </div>
            </div>

            <p className="text-center text-xs text-gray-400 mt-4">感谢您的支持 ❤️</p>
          </div>
        </div>
      )}
    </>
  )
}
