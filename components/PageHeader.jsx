
export default function PageHeader({ title, subTitle }) {
  return (
    <section className="page-header padding">
        <div className="container">
            <div className="page-content text-center">
                <h2>{title}</h2>
                <p>{subTitle}</p>
            </div>
        </div>
    </section>
  )
}


