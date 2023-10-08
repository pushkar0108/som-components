import { useRouter } from 'next/router';
import PageHeader from "../../components/PageHeader";
import Layout from "../../components/Layout";

const branchMap = {
  1: {
    title: "Guragon Branch",
    subTitle: "Plot No. 1, Survey No. 142/1, Budasan, Taluka-Kadi, Distt. Mehsana, Gujarat-382715",
    images: [
      "/img/branches/1/1.jpeg",
      "/img/branches/1/2.jpeg",
      "/img/branches/1/3.jpeg",
      "/img/branches/1/4.jpeg",
      "/img/branches/1/5.jpeg",
      "/img/branches/1/6.jpeg",
      "/img/branches/1/7.jpeg",
      "/img/branches/1/8.jpeg",
      "/img/branches/1/9.jpeg",
      "/img/branches/1/10.jpeg",
      "/img/branches/1/11.jpeg",
    ]
  },
  2: {
    title: "Gujarat Branch",
    subTitle: "Plot No. 1, Survey No. 142/1, Budasan, Taluka-Kadi, Distt. Mehsana, Gujarat-382715",
    images: [
      "/img/branches/2/1.jpeg",
      "/img/branches/2/2.jpeg",
      "/img/branches/2/3.jpeg",
    ]
  },
}

export default function Product() {
  const router = useRouter();
  const { bid } = router.query;
  const branch = branchMap[bid];

  return (
    <Layout
      // srcFb = {'../public/icons/fb.png'}
      // srcInsta = {'../public/icons/insta.png'}
    >
      {
        branch ?
        <>
          <PageHeader
            title={branch.title}
            subTitle={branch.subTitle}
          />
          <section className="projects-section padding">
            <div className="container">
              <div className="row">
                {
                  branch.images.map(image => {
                    return (
                      <div key={image} className="col-lg-4 col-sm-6 padding-15">
                        <div className="project-item" style={{
                          border: "1px solid #d7e1e8cf",
                          borderRadius: "5px"
                        }}>
                          <img src={image} alt="projects" />
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </section>
        </> :
        <p>No branch found, with bid: {bid}</p>
      }
      
    </Layout>
  )
}
