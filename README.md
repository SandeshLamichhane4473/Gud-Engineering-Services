# Gud-Engineering-Services

<div className='w-72  z-0 font-medium text-black '>
                    <div onClick={() => setOpen(!open)} className={`bg-white w-full p-2 flex text-2xl justify-between items-center rounded ${!selected && "text-gray-700"}`}>
                        {selected ? selected?.length > 25 ? selected?.substring(0, 25) + "..." : selected : "Select Country"}
                        <HiChevronDown size={20} />
                    </div>
                    <ul className={`bg-white mt-2 z-10 max-h-60 overflow-y-auto ${open ? 'max-h-60' : 'max-h-0'}`}>

                        <div className='px-2 flex  items-center bg-white sticky top-0'>
                            < HiSearch size={18} className='text-gray-700' />

                            <input
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value.toLowerCase())} type='text' className='placeholder:text-gray-700 p-2 outline-none ' placeholder='Enter Country Name' />
                        </div>
                        {
                            countries?.map((country) => (
                                <li key={country?.name}
                                    onClick={() => {
                                        if (country?.name?.toLowerCase() !== selected.toLowerCase()) {
                                            setSelected(country?.name)
                                            setOpen(false);
                                            setInputValue('')
                                        }
                                    }}
                                    className={`p-2 text-sm hover:bg-sky-600 hover:text-white 
                                    ${country?.name?.toLocaleLowerCase() === selected?.toLowerCase() && 'bg-sky-700 text-white'}
                                    ${country?.name?.toLowerCase().startsWith(inputValue) ? "block" : "block"}`}>{country?.name}</li>

                            ))
                        }



                    </ul>

                </div>
