import React from "react";
import Image from "next/image";

export default function Intro() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div>
          <Image
            src="https://i.ebayimg.com/images/g/CU8AAOSw6SBgullZ/s-l1200.webp"
            width="192"
            height="192"
            quality="95"
            priority={true}
            alt="Tian Yao"
          />
        </div>
      </div>
    </section>
  );
}
