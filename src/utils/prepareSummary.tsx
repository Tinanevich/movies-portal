const prepareSummary = (value: string | undefined) =>
    value ? <span className="content-value" dangerouslySetInnerHTML={{__html: value}}></span>: 'N/A';

export default prepareSummary;