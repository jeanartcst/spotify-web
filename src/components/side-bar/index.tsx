import ThereIsNoAlbumAdded from './../../images/thereIsNoAlbumAdded.jpg'

export function SideBar() {
  const data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  return (
    <div className="h-full w-[72px] bg-[#121212] mx-2 rounded-md">
      <div className="grid grid-flow-row overflow-y-scroll no-scrollbar gap-2">
    {
      // TO-DO: Resize this f'kin images 
      data.map(item => (
        <div key={item} className="py-2 px-4 hover:bg-slate-900/10">        
          <img src={ThereIsNoAlbumAdded} alt=""
          className='object-contain w-12  rounded-lg'
           />
        </div>
      ))
    }
      </div>
    </div>
  )
}
