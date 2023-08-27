import { Link } from 'react-router-dom'

const Public = () => {

    const content = (
        <section className="public">
            <main><h1 className='public_headline'>Organize, Collaborate, and Empower Your Workflow with MyNote!</h1>
            <p className='public_detail-line'>Streamline your note-taking process with NoteCategorize, the ultimate note-making website that allows you to effortlessly categorize and manage your notes based on your role - admin, manager, or employee. Stay organized, collaborate seamlessly, and boost productivity with NoteCategorize!</p>
            <p className='public_detail-line'>For know more about the project please visit My<p className='copy-button' > <a href='https://github.com/AMANKUMAR1020/mynote'>Github Account</a></p></p>
            </main>
            
        <div className='box1'>
        <div class="box">
        <div class="button-container">
            <button class="copy-button" title="Only ADMIN can, create,edit and delete notes and employess
            MANAGER are allow to create,edit and delete notes but not employess
            EMPLOYEES only can create notes and edit but not able to delete employees" >username</button>
            <span title="He is admin so, he can create,edit and delete notes and employess" class="text">aman</span>
            <span title="He is admin so, he can also create, edit and delete notes and employess" class="text">Dave</span>
            <span title="He is admin so, he can create, edit and delete notes and employess" class="text">Hank</span>
            <span title="He is admin so, he can create, edit and delete notes and employess" class="text">admin</span>
            <span title="He is manager so, he can create and edit but delete notes and employess" class="text">manager</span>
            <span title="He is employees so, he can only create notes and edit on it but cannot delete notes and employess" class="text">employee</span>
        </div>
        <div class="button-container">
            <button class="copy-button">Password</button>
            <span class="text">aman</span>
            <span class="text">!Dd12345</span>
            <span class="text">!Hh12345</span>
            <span class="text">admin</span>
            <span class="text">manager</span>
            <span class="text">employee</span>
        </div>
        </div>
        </div>
            <footer className='employee-login'>
                <Link to="/login" >
                    Employee Login
                </Link>
            </footer>
        </section>

    )
    return content
}
export default Public