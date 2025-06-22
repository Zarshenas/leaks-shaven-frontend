import React from "react";

function Dmca() {
  return (
    <>
      <h1 className="scroll-m-20  text-3xl font-extrabold tracking-tight text-balance">
        DMCA
      </h1>
      <div>
        <p className="leading-7 text-muted-foreground mt-2">
          In accordance with the law https://onlyshare.io/ complies with the
          Digital Millennium Copyright Act, (Title 17 U.S.C. §512) and World
          Intellectual Property Organization (WIPO), in responding with all
          claims that arise out of intellectual property of infringement and
          regulated under the WIPO Copyright Treaty (WCT). We will promptly
          investigate all notices and remove any alleged infringement, taking
          appropriate legal actions required under such laws
        </p>
        <p className="leading-7 text-muted-foreground mt-6">
          You may send us an email at contact@onlyshare.io stating the below
          information:
        </p>
        <ol className="mt-4 ml-6 list-decimal text-muted-foreground [&>li]:mt-2">
          <li>
            Identify the copyrighted work that you claim has been infringed
            upon. If multiple copyrighted works have been infringed upon, you
            may provide a full list of the copyrighted works in this notice.
          </li>
          <li>
            Identify the link or material you claim is infringing (or the
            subject of infringing activity) and to which access is to be
            disabled. Include at a minimum, if applicable, the link shown on the
            site or the exact location where such material may be found.
          </li>
          <li>
            Provide your affiliation with the copyrighted work (if applicable),
            mailing address, telephone number and email address.
          </li>
          <li>
            <p className="leading-7 text-muted-foreground mt-2">
              Include both of the following statements in the Notice:
            </p>
            <p className="leading-7 text-muted-foreground mt-6">
              * I hereby state that I have a good faith belief that the disputed
              use of the copyrighted material is not authorized by the copyright
              owner, its agent, or the law (e.g., as a fair use).
            </p>
            <p className="leading-7 text-muted-foreground mt-6">
              * I hereby state that the information in this notice is accurate
              and, under penalty of perjury, that I am the owner, or authorized
              to act on behalf of, the owner, of the copyright or of an
              exclusive right under the copyright that is allegedly infringed.
            </p>
          </li>
          <li>
            Provide your full legal name and your electronic or physical
            signature.
          </li>
          <p className="leading-7 text-muted-foreground mt-6">
            We are not liable for any false claims and you agree that if you
            have claimed a false claim of copyright infringement with us, that
            you may be held responsible for all legal actions. Therefore we
            request that you seek legal advice before reporting any of the
            following criteria regarding a claim to make sure the copyrighted
            material is of an infringement.
          </p>
        </ol>
      </div>
    </>
  );
}

export default Dmca;
