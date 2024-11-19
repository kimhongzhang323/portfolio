const Navbar = () => {
    return <nav className='mb-20 flex items-center justify-between py-6 ml-10'>
        <div className="flex items-start ml-8 font-lg">
            <a href="#" className="gradient-text text-2xl font-bold">Kim.AI</a>
        </div>
        <div className="flex-grow"></div>
        <div className="flex justify-center space-x-12">
            <a href="#" className="text-neutral-100 hover:text-primary-500">About</a>
            <a href="#" className="text-neutral-100 hover:text-primary-500">Project</a>
            <a href="#" className="text-neutral-100 hover:text-primary-500">Certificate</a>
            <a href="#" className="text-neutral-100 hover:text-primary-500">Skills</a>
            <a href='#' className="text-neutral-100 hover:text-primary-500">Contact Me</a>
        </div>
        <div className="flex-grow"></div>
    </nav>;
};

export default Navbar;