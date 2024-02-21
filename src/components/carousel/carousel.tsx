"use client"

import { ThemeProvider, Carousel } from "@material-tailwind/react";

export function MasonryGridGallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4">
      <div className="grid">
        <div>
          <iframe
            className="h-[280px] max-w-full rounded-lg object-cover object-center"
            src="https://drive.google.com/file/d/1xJ_z27s62Pus1WO1Qge-lADef55Nh_LE/preview"
          />
        </div>
        <div>
          <iframe
            className="h-[480px] max-w-full rounded-lg object-cover object-center "
            src="https://drive.google.com/file/d/11ikA820gyWaUve90icx31QUPoFKhGJDn/preview"
          />
        </div>
        <div>
          <iframe
            className="h-[280px] max-w-full rounded-lg object-cover object-center"
            src="https://drive.google.com/file/d/1BMgxpGTZ8jC-TUrNFnWOz78cEvhhNVAM/preview"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <iframe
            className="h-[480px] max-w-full rounded-lg object-cover object-center"
            src="https://drive.google.com/file/d/1aewBupJfP4FuGD3kE-BJU0IFSRUAz_aV/preview"
          />
        </div>
        <div>
          <iframe
            className="h-[280px] max-w-full rounded-lg object-cover object-center"
            src="https://drive.google.com/file/d/13ujT5jIt5IZEu23iVaVeXjHXC4eAPCiv/preview"
          />
        </div>
        <div>
          <iframe
            className="h-[280px] max-w-full rounded-lg object-cover object-center "
            src="https://drive.google.com/file/d/1q9sGjbjVL47_FprcCJxrRbW4y3d0Bt73/preview"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <iframe
            className="h-[280px] max-w-full rounded-lg object-cover object-center"
            src="https://drive.google.com/file/d/1PYgxJhvVCs59IeEQpHfiHMwYmDxsUEVv/preview"
          />
        </div>
        <div>
          <iframe
            className="h-[280px] max-w-full rounded-lg object-cover object-center "
            src="https://drive.google.com/file/d/1_DOyv8Ft2L9gxBU3b8z9F3l1RGI42AP8/preview"
          />
        </div>
        <div>
          <iframe
            className="h-[480px] max-w-full rounded-lg object-cover object-center"
            src="https://drive.google.com/file/d/10dk69miQUVqq5zGtDyGXEA4q3vOjaQo6/preview"
          />
        </div>
      </div>
      <div className="grid">
        <div>
          <iframe
            className="h-[480px] max-w-full rounded-lg object-cover object-center"
            src="https://drive.google.com/file/d/13vjrlHzjUxBvTUGCp273gBi87-2Jf3TH/preview"
          />
        </div>
        <div>
          <iframe
            className="h-[480px] max-w-full rounded-lg object-cover object-center"
            src="https://drive.google.com/file/d/1aNKVKbCVPqsC2HHPbQJawmylZK3IkUIV/preview"
          />
        </div>
      </div>
    </div>
  );
}