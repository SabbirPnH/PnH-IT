const NextNumber = () => {
    return(
        <div>
             <ol class="flex justify-center text-xs font-medium space-x-1">
  <li>
    <a href="/?page=1" class="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-20 h-20" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
      </svg>
    </a>
  </li>

  <li>
    <a href="/?page=1" class="block w-8 h-8 text-lg text-center border border-gray-100 rounded leading-8"> 1 </a>
  </li>

  <li class="block w-8 h-8 text-center text-lg text-white bg-[#F68921] border-blue-600 rounded leading-8">2</li>

  <li>
    <a href="#" class="block w-8 h-8 text-lg text-center border border-gray-100 rounded leading-8"> 3 </a>
  </li>

  <li>
    <a href="#" class="block w-8 h-8 text-center text-lg border border-gray-100 rounded leading-8"> 4 </a>
  </li>

  <li>
    <a href="#" class="inline-flex  items-center justify-center w-8 h-8 border border-gray-100 rounded">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-20 h-20" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
      </svg>
    </a>
  </li>
</ol>   
        </div>
    )
}
export default NextNumber;