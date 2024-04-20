
export default function PageHeader({ title, subTitle, subTitleBg = false }) {
  return (
    <section className="page-header padding">
        <div className="container">
            <div className="page-content text-center">
                <h2>{title}</h2>
                <p className={subTitleBg ? "product-description": ""}>{subTitle}</p>
            </div>
        </div>
    </section>
  )
}


