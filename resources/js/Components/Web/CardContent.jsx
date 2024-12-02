export default function CardContent({ title, contentText, className, childClassName, icon }) {
    return (
        <section id="services" className={className}>
            <div className={`container mx-auto px-16 items-center flex flex-col lg:flex-row ${childClassName}`}>
                <div className="lg:w-1/2">
                    <div className="lg:pr-32 xl:pr-48">
                        <h3 className="text-3xl font-semibold leading-tight">
                            {title}
                        </h3>
                        <p className="mt-8 text-xl font-light leading-relaxed">
                            {contentText}
                        </p>
                    </div>
                </div>
                <div className="mt-10 lg:mt-0 w-full lg:w-1/2 undefined">
                    {icon}
                </div>
            </div>
        </section>
    );
}
