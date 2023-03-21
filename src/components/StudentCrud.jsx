export const StudentCrud = (props) => {
  return (
    <div classNameName="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Serial number
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Surname
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {props.students.map((row) => (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4">{row.serial_number}</td>
              <td className="px-6 py-4">{row.profile.name}</td>
              <td className="px-6 py-4">{row.profile.surname}</td>
              <td className="flex items-center px-6 py-4 space-x-3">
                <div className="bg-blue-600 font-bold text-xs py-1 px-2 text-white rounded-md cursor-pointer hover:bg-blue-500 transition-all duration-200 ease-in-out">
                  Watch
                </div>
                <div className="bg-red-600 font-bold text-xs py-1 px-2 text-white rounded-md cursor-pointer hover:bg-red-500 transition-all duration-200 ease-in-out">
                  Delete
                </div>
                <div className="bg-green-600 font-bold text-xs py-1 px-2 text-white rounded-md cursor-pointer hover:bg-green-500 transition-all duration-200 ease-in-out">
                  Edit
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
