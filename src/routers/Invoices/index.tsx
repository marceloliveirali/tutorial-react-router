import { Link } from "react-router-dom";
import { getInvoices } from "../../data";

function Invoices()
{
    const invoices = getInvoices();

    return (
        <>
            <div style={{ display: "flex" }}>
                <nav style={{
                    borderRight: "solid 1px",
                    padding: "1rem",
                    }}
                >
                    {invoices.map((invoice) => (
                        <Link
                            to={`/invoices/${invoice.number}`}
                            style={{ display: "block", margin: "1rem 0" }}
                            key={invoice.number}
                        >
                            {invoice.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    );
}

export default Invoices;