import Image from "next/image";
import { HiOutlineUser } from "react-icons/hi";
import { TfiSearch } from "react-icons/tfi";
import { BiBellMinus } from "react-icons/bi";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
	const [scrolled, setScrolled] = useState(false);
	useEffect(() => {
		const handleScrolled = () => {
			if (window.scrollY > 0) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};
		window.addEventListener("scroll", handleScrolled);
		return () => window.removeEventListener("scroll", handleScrolled);
	}, []);


	return (
		<header
			className={`flex justify-between items-center p-2 fixed top-0 z-50 w-full lg:px-4  transition-all ${
				(scrolled && "bg-red-500") || "bg-custom"
			}`}>
			<div className='flex items-center space-x-2 md:space-x-10'>
				<Image
					className='object-contain cursor-pointer'
					src={"/logo-movie.svg"}
					alt={"logo"}
					width={56}
					height={56}
					priority={true}
				/>
				<ul className='space-x-4 hidden md:flex'>
					<li className='navLink'>Home</li>
					<li className='navLink'>Movies</li>
					<li className='navLink'>TV Shows</li>
					<li className='navLink'>New</li>
					<li className='navLink'>Popular</li>
				</ul>
			</div>
			<div className='flex items-center space-x-2 md:space-x-6'>
				<TfiSearch className='cursor-pointer h-5 w-5' />
				<p className='hidden lg:inline'>Kids</p>
				<BiBellMinus className='cursor-pointer h-5 w-5' />
				<Link href={"/account"}>
					<HiOutlineUser className='cursor-pointer h-5 w-5' />
				</Link>
			</div>
		</header>
	);
};

export default Header;
