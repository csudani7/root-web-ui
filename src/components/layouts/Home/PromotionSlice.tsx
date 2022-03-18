import React from 'react';
import PromotionSection from '../../ui/PromotionSection';

export default function PromotionSlice() {
  return (
    <div className="grid grid-cols-1">
      <PromotionSection
        buttonText="FAQ"
        imagePosition="left"
        promotionImage={{ src: '/svg/promotion-image-three.svg', alt: 'promotion-photo' }}
        subTitle="pricing"
        title="Wait...this is all free?!"
        content="Thats right - zero, nil, nothing, nada! We believe in quality education and making education accessible everywhere 🌎  at low costs."
        bgColor="bg-gradient-to-r from-light03Green to-caribbean03Green"
        buttonBgColor="bg-transparant border border-black"
        borderRadius="rounded-lg"
      />
    </div>
  );
}
