import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./Accounting.css";

export const Accounting = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <div className="section-title text-center">
            <h1>Accounting</h1>
          </div>
        </div>
      </div>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header> Introduction Of Accounting #1</Accordion.Header>
          <Accordion.Body>
            <h4 align="left"> What Is Accounting </h4>
            <p>
              Accounting for startups involves tracking the inflows and outflows
              of cash and summarizing this data into financial statements that
              can, later on, be used to analyze the business performance. Now,
              don't confuse bookkeeping with accounting. Bookkeeping is the
              actual process of recording all of your business transactions. It
              doesn't involve a lot of analytical work, in contrast to
              accounting, which focuses more on the in-depth financial
              evaluation of the business. As a startup founder,{" "}
            </p>
            <img
              className="double"
              src="/accounting/accounting-cycle-process.jpg"
              alt=""
            />

            <h6 align="left">
              Some of the most common financial activities you'll have to deal
              with are:
            </h6>
            <ul className="stylingul">
              <li>
                Daily bookkeeping. This involves tasks like processing payments,
                making journal entries,creating financial reports, and so on.
              </li>
              <li> Creating & sending invoices to clients.</li>
              <li>
                Checking payables and receivables to make sure clients are
                transferring payments on time.
              </li>
              <li>Making sure cash flow is able to meet upcoming expenses.</li>
              <li>Calculating tax liabilities and filing for tax returns.</li>
            </ul>
            <p>
              There's a lot of documentation that goes into each one of the
              tasks above. Tracking and documenting the above could be done
              manually (on spreadsheets and physical folders) or through
              automated accounting software. We don't recommend the manual
              method, though. The accounting process is long and complex, so
              writing everything down by hand (or typing it) isn't convenient
              unless you're running a very small business. It can be
              time-consuming, tiring, and leaves plenty of room for accounting
              errors.
            </p>

            {/* <img src="Types-of-Accounting-F-1024x576,jpg" className='img'/> */}
            <img src="a4.png" alt="" className="double" />
            <h4 align="left">What Financial Records Should A Startup Have?</h4>
            <p>
              Startups should keep track of all their documents showing
              transactions and records. So, this means everything. Examples of
              some financial reporting and records include:
            </p>
            <ul className="stylingul">
            <li>Bank Statements</li>
            <li>Credit Card Statements</li>
            <li>Bills</li>
            <li> Receipts</li>
            <li> Invoices</li>
            <li> Financial Statements</li>
            <li> Tax Forms</li>
            <li>Tax Returns and Supporting Documents</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Essentials You Should Know About Accounting #2
          </Accordion.Header>
          <Accordion.Body>
            <h4 align="left">Accounting Essentials You Should Know</h4>
            <br />
            <h6 align="left">The Accounting Equation</h6>
            <p>
              {" "}
              The accounting equation shows the relationship between three main
              entities of your startup: Assets, Liabilities, and Equity. Assets
              are the resources, equipment, cash your startup owns. Liabilities
              are the wages, debts, taxes your startup owes. The owner's equity
              is what's left after you subtract liabilities from assets So, the
              accounting equation looks like this:
            </p>
            Assets = Liabilities + Owners Equity
            <p>
              When a business keeps correct recordings of their transactions,
              the accounting equation always balances. Meaning, the left side
              always equals the right.
            </p>
            <h6 align="left"> Double-entry bookkeeping</h6>
            <h6 align="left"> Chart of Accounts</h6>
            <p>
              Assets are the resources, equipment, cash your startup owns.
              Liabilities are the wages, debts, taxes your startup owes. The
              owner's equity is what's left after we differentiate assets and
              liabilities (as previously mentioned in the accounting equation
              section) Revenue is what the startup makes from sales or other
              activities. Expenses are the costs of operating the business.
            </p>
            <h6 align="left"> Balance Sheet</h6>
            <p>
              The balance sheet represents assets, liabilities, and equity at a
              particular date. This financial statement is unique in that it
              reports information for a specific day, not for an extended period
              of time (a month, a year). The balance sheet is based upon the
              accounting equation, which we explained above:
            </p>
            Assets = Liabilities + Owner's Equity.
            <p>
              For that reason, the statement is divided into two sections (left
              and right) as shown below:
            </p>
            <img
              className="double"
              src="/accounting/balance_sheet.png"
              alt=""
            />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Why Accounting Matters For Your Startup #3
          </Accordion.Header>
          <Accordion.Body>
            <img className="double" src="/accounting/a2.jpg" alt="" />
            <h6 align="left"> 1. To support planning for growth</h6>
            <p>
              For your startup to grow and scale, you'll likely need capital.
              For external funding, expertly prepared financial statements and
              cash flow projections can help convince investors and lenders that
              your business will be profitable and offer them a good return on
              investment.
            </p>
            <h6 align="left">
              {" "}
              2. To help in raising funding from investors or selling your
              business
            </h6>
            <p>
              As mentioned earlier in this article, if you're looking to take
              out a business loan, line of credit, or raise venture capital,
              your financial reports must follow GAAP. Experienced accountants
              understand the GAAP system, which uses the accrual accounting
              method, and can prepare you for exit scenarios such as mergers,
              acquisitions, or initial public offerings.{" "}
            </p>
            <h6 align="left">
              {" "}
              3. To properly collect money due to your business
            </h6>
            <p>
              Accounts receivable (A/R) represents the money your business
              expects to receive from customers for the goods or services you've
              provided. The efficient collection of your A/R is essential to
              your business's cash flow. These figures are a necessary to
              calculate your profitability and provide the most precise gauge of
              your startup's revenue.{" "}
            </p>
            <h6 align="left"> 4. To remaining compliant</h6>
            <p>
              Whether you\'re at the beginning stages of building your startup or
              planning for future growth, using a GAAP-compliant accounting
              system will help prepare your business to scale to any size. From
              correctly categorizing and storing financial records to
              establishing clear controls and approval workflows, every effort
              counts to stay ahead of potential audits (which are more common
              than startups may think!). A fundraising round, due diligence for
              an acquisition, or applying for a bank loan or line of credit
              could require a startup to undergo a financial audit.
            </p>
            <h6 align="left"> 5. For paying taxes correctly</h6>
            <p>
              A solid accounting system managed by experts will make tax return
              preparation all that much easier and more accurate. It will also
              ensure you can maximize your tax deduction opportunities, like the
              R&D tax credit (Research & Experimentation Tax Credit), which
              offers additional tax credit incentives for companies pursuing
              innovation. If your accounts are not in order, you\'ll likely miss
              out on maximizing this serious tax benefit for startups.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Types of Accounting #4</Accordion.Header>
          <Accordion.Body>
            <p>
              Accounting can be classified into two categories – financial
              accounting and managerial accounting.
            </p>
            <img className="double" src="/accounting/typefofaccount.png" alt="" />
            <h6 align="left">1. Financial Accounting</h6>
            <p>
              Financial accounting involves the preparation of accurate
              financial statements. The focus of financial accounting is to
              measure the performance of a business as accurately as possible.
              While financial statements are for external use, they may also be
              for internal management use to help make decisions. Accounting
              principles and standards, such as US GAAP (Generally Accepted
              Accounting Principles) or IFRS (International Financial Reporting
              Standards), are standards that are widely adopted in financial
              accounting. The accounting standards are important because they
              allow all stakeholders and shareholders to easily understand and
              interpret the reported financial statements from year to year.
            </p>
            <h6 align="left">2. Managerial Accounting</h6>
            <p>
              Managerial accounting analyzes the information gathered from
              financial accounting. It refers to the process of preparing
              reports about business operations. The reports serve to assist the
              management team in making strategic and tactical business
              decisions. Managerial accounting is a process that allows an
              enterprise to achieve maximum efficiency by reviewing accounting
              information, deciding on the best next steps to follow, and then
              communicating these next steps to internal business managers. An
              example of managerial accounting is cost accounting. Cost
              accounting focuses on a detailed break-up of costs for effective
              cost control. Managerial accounting is very important in the
              decision-making process.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Accounting Fundamentals #5</Accordion.Header>
          <Accordion.Body>
            <img className="double"
              src="/accounting/new_free_accounting_course.png"
              alt=""
            />
            <h5 align="left">Fundamentals of Accounting Principles</h5>
            <p>
              Accounting is the procedure of data entry, recording, summarizing,
              analyzing, and then reporting the data related to financial
              transactions of businesses and corporations. Fundamentals of
              accounting are guiding principles to perform such tasks.
              Operations of a business entity over an accounting period,
              generally a year, are keys to prepare financial statements. A
              company uses accounts to measure where it stands in the economic
              sense. They help in decision-making as well as cost planning and
              assessment. Above all, accounting reports are of utmost importance
              to outside entities as well, viz., the investors, creditors, and
              regulatory bodies. Professionals across the world use a set of
              standards- "GAAP– Generally Accepted Accounting Principles" for
              preparing these reports.
            </p>
            <h6 align="left"> 1.Revenue Recognition Principle</h6>
            <p>
              According to this principle, revenue recognition happens at the
              time of execution of the transaction—irrespective of receipt of
              payment or cash. More importantly, the sale of goods or services
              should be complete, and payment should be due for it. Also, the
              associated costs are booked during the same period.
            </p>
            <h6 align="left">2. Historical Cost Principle</h6>
            <p>
              This principle directs that all assets will be reported at the
              actual cost of acquisition and not at their current market value.
              There is an exception to this rule for highly marketable
              securities. They are valued at their fair market value. Intangible
              assets with impairments are also shown at their appropriate market
              values. Thus, this principle ensures a reasonable value/cost of
              the assets reported.
            </p>
            <h6 align="left">3.Matching Principle</h6>
            <p>
              The matching principle directs that income earned during an
              accounting period is compared with corresponding expenditure.
              Similarly, all the costs related to the sale or revenue reported
              in a particular period be taken into account in that period only.
            </p>
            <h6 align="left">4.Full Disclosure Principle</h6>
            <p>
              The full disclosure principle states that an entity's books of
              accounts should fully disclose all the relevant information to its
              users. Also, there should be no deliberate concealment of
              information. The idea and objective are that concerned people
              should be able to make proper and well-informed decisions based on
              the reports.
            </p>
            <h6 align="left">5.Objectivity Principle</h6>
            <p>
              This principle states that all the information in the books of
              accounts should be objective, reliable, and accurate. Also, they
              should be free from the personal bias of the reporting persons.
              Above all, every transaction should be backed with adequate
              evidence, such as vouchers, receipts, invoices, etc., as support.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Accounting Policies #6</Accordion.Header>
          <Accordion.Body>
            <h5 align="left"> What are Accounting Policies?</h5>
            <img
              className="double"
              src="/accounting/Accounting-Policies-1.jpg"
              alt=""
            />
            <p>
              Accounting Policies are internal rules, standards, and procedures
              that a company's management lays down to guide them in the
              preparation of accounts. Basically, these policies help with the
              accounting, setting up measuring systems, as well as in the
              presentation of accounts.Such policies are very useful when
              recording complex accounting activities. These activities include
              which depreciation method to use, how to treat R&D expenses,
              goodwill recognition, valuing inventory, and more.
            </p>
            <h4 align="left">Accounting Policies </h4>
            <h6 align="left">1. framework:</h6>
            <p>
              To articulate the company's financial affairs, it needs to prepare
              financial statements. And the financial statements prepared
              without any guidance would have no coherence within them. They
              help find out the coherence between financial statements.
              Accounting policy also offers a robust framework to follow so that
              the company may adhere to the right structure and prepare its
              financial statements.
            </p>
            <h6 align="left">2.Disclosure:</h6>
            <p>
              A company must disclose what accounting policy they have been
              following. Since accounting standards represent items in many
              ways, proper accounting policy disclosure is essential.
            </p>
            <h6 align="left">3.Providing advantage to investors:</h6>
            <p>
              If the companies mention the accounting policy they used to
              produce the financial statements, it will also help the investors.
              By stating the accounting policy, the companies ensure that they
              have maintained coherence while providing financial statements.
              This coherence helps the investors look at the financial
              statements and compare them with other companies from similar and
              different industries.
            </p>
            <h6 align="left">
              4.The government can keep a hold on the company's financial
              statements:
            </h6>
            <p>
              All the financial statements prepared are as per the accounting
              policy, and companies always follow a proper structure. These
              companies also need to keep in mind that they can only follow the
              accounting policy made as per GAAP or IFRS . Thus, the government
              can have a direct hold on the company's financial statements , and
              the government can protect the interest of the investors.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>Tax #7</Accordion.Header>
          <Accordion.Body>
            <h4 align="left">What Is Tax Accounting?</h4>
            <p>
              Tax accounting is a structure of accounting methods focused on
              taxes rather than the appearance of public financial statements.
              In short, tax accounting is the means of accounting for tax
              purposes. Tax accounting is governed by the Internal Revenue Code,
              which dictates the specific rules that companies and individuals
              must follow when preparing their tax returns. Tax accounting
              applies to everyone—individuals, businesses, corporations, and
              other entities. Even those who are exempt from paying taxes must
              participate in tax accounting. The purpose of tax accounting is to
              be able to track funds (funds coming in as well as funds going
              out) associated with individuals and entities.
            </p>
            <h6 align="left">KEY TAKEAWAYS</h6>
            <ul className="stylingul">
              <li>
                Tax accounting is the subsector of accounting that deals with
                the preparations of tax returns and tax payments.
              </li>
              <li>
                Tax accounting is used by individuals, businesses, corporations
                and other entities.
              </li>
              <li>
                Tax accounting for an individual focuses on income, qualifying
                deductions, donations, and any investment gains or losses.
              </li>
              <li>
                For a business, tax accounting is more complex, with greater
                scrutiny regarding how funds are spent and what is or isn't
                taxable.
              </li>
            </ul>
            <img className="double" src="/accounting/Tax-Accounting.jpg" alt="" />
            <h4 align="left">Basics of Tax accounting</h4>
            <h6 align="left">1.Deferred Tax asset:</h6>{" "}
            <p>
              Is generated when there is a difference in book profit, and
              taxable profit arises due to a timing issue. There are expenses
              like provision for doubtful debts, which are considered for
              deduction in accounting in the current year. However, these are
              allowed for a deduction for taxation only when the amount is
              declared as bad debt, which can happen in the coming years.In this
              case, the taxable profit will be higher compared to accounting
              profit, and the person or organization will pay more taxes this
              year, which. The extra amount paid as tax on incremental profit
              due to rejection of provision amount for deduction is considered
              as deferred tax, which will be realized in the coming years.
            </p>
            <h6 align="left">2.Deferred Tax liability</h6>
            <p>
              Deferred Tax Liabilityis generated when the person or organization
              has to pay fewer taxes in the current year due to the timing
              difference. For example – let's consider that an asset of $10,000
              is being depreciated in accounting books under (SLM) straight-line
              method for 8 year– the depreciation each year will be $1,250
              ($10,000/8). However,if the tax rules state that assets have to be
              depreciated @20% (WDV) written down value method.The depreciation
              for taxation purpose in second year will be $1,600 (($10,000 –
              2000 i.e. 20% for first-year) = $8,000*20% = $1,600)). Here the
              organization will get an extra deduction of $350 ($1,600-$1,250)
              for taxation purposes. If we consider the tax rate to be 30%, the
              deferred tax liability here is $105 ($350*30%).
            </p>
            <h6 align="left">3.VAT Accounting</h6>{" "}
            <p>
              {" "}
              Most of the countries a Good & Service Tax (GST) or VAT
              (value-added tax) , which forms part of almost all the invoices
              issued. Now, this should not be considered as expenses directly
              because the organizations get an Input Tax credit on the amount
              already paid. To claim those inputs, the tax authorities lay
              certain conditions regarding the format of invoice, name, and
              registration of the company, details of the second part, etc. and
              all these conditions have to be met by tax accounting team before
              claiming VAT/GST input credit.
            </p>
            <h6 align="left">4. Transfer Pricing</h6>{" "}
            <p>
              In today's world of globalization , many companies open their
              branches in various parts of the world. A policy monitors transfer
              pricing called an Arm's Length transaction Pricing, which
              advocates the fair-trade policy across the globe. In simple words,
              it says that a related part or person should not avail good or
              services at a lower cost than the price at which it has been sold
              to an unrelated third party.
            </p>
            <h6 align="left">5. Categorisation of Income</h6>{" "}
            <p>
              Accounting considers all the receipts and payments for calculating
              the accounting profit. However, not all receipts are related to
              business, and the rate of tax differs depending on the type of
              receipt it is.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
