import React, { useEffect, useState } from 'react'

function Table() {
  // const [data,setData]=useState([])
  const data = [
    {
      id: 1,
      name: "Alice Johnson",
      age: 28,
      role: "Engineer",
      hireDate: "2022-01-15",
      isActive: true,
      salary: 85000,
      department: "Development",
      projectsCompleted: 5,
      lastLogin: "2024-07-28T14:48:00.000Z",
      accessLevel: "Admin"
    },
    {
      id: 2,
      name: "Bob Smith",
      age: 34,
      role: "Manager",
      hireDate: "2020-06-30",
      isActive: false,
      salary: 95000,
      department: "Operations",
      projectsCompleted: 10,
      lastLogin: "2024-07-30T09:21:00.000Z",
      accessLevel: "User"
    },
    {
      id: 3,
      name: "Charlie Rose",
      age: 22,
      role: "Intern",
      hireDate: "2023-03-01",
      isActive: true,
      salary: 45000,
      department: "Development",
      projectsCompleted: 1,
      lastLogin: "2024-07-29T17:03:00.000Z",
      accessLevel: "User"
    },
    {
      id: 4,
      name: "David Green",
      age: 40,
      role: "Director",
      hireDate: "2018-11-20",
      isActive: true,
      salary: 120000,
      department: "Management",
      projectsCompleted: 20,
      lastLogin: "2024-07-27T12:35:00.000Z",
      accessLevel: "Admin"
    },
    {
      id: 5,
      name: "Eva White",
      age: 30,
      role: "Designer",
      hireDate: "2021-05-15",
      isActive: true,
      salary: 70000,
      department: "Design",
      projectsCompleted: 8,
      lastLogin: "2024-07-31T10:15:00.000Z",
      accessLevel: "User"
    },
    {
      id: 6,
      name: "Frank Black",
      age: 29,
      role: "Engineer",
      hireDate: "2019-09-17",
      isActive: true,
      salary: 80000,
      department: "Development",
      projectsCompleted: 6,
      lastLogin: "2024-07-25T11:45:00.000Z",
      accessLevel: "User"
    },
    {
      id: 7,
      name: "Grace Brown",
      age: 26,
      role: "Engineer",
      hireDate: "2021-04-10",
      isActive: false,
      salary: 78000,
      department: "Development",
      projectsCompleted: 4,
      lastLogin: "2024-07-20T09:00:00.000Z",
      accessLevel: "User"
    },
    {
      id: 8,
      name: "Hank Green",
      age: 45,
      role: "Senior Manager",
      hireDate: "2017-03-25",
      isActive: true,
      salary: 110000,
      department: "Operations",
      projectsCompleted: 15,
      lastLogin: "2024-07-29T13:22:00.000Z",
      accessLevel: "Admin"
    },
    {
      id: 9,
      name: "Ivy Blue",
      age: 31,
      role: "Designer",
      hireDate: "2019-08-05",
      isActive: true,
      salary: 72000,
      department: "Design",
      projectsCompleted: 7,
      lastLogin: "2024-07-28T08:48:00.000Z",
      accessLevel: "User"
    },
    {
      id: 10,
      name: "Jack White",
      age: 37,
      role: "Product Manager",
      hireDate: "2020-02-20",
      isActive: false,
      salary: 95000,
      department: "Product",
      projectsCompleted: 12,
      lastLogin: "2024-07-26T15:18:00.000Z",
      accessLevel: "Admin"
    },
    {
      id: 11,
      name: "Kara Black",
      age: 33,
      role: "Engineer",
      hireDate: "2018-12-12",
      isActive: true,
      salary: 85000,
      department: "Development",
      projectsCompleted: 9,
      lastLogin: "2024-07-29T12:00:00.000Z",
      accessLevel: "User"
    },
    {
      id: 12,
      name: "Leo Green",
      age: 27,
      role: "Designer",
      hireDate: "2021-01-30",
      isActive: true,
      salary: 68000,
      department: "Design",
      projectsCompleted: 3,
      lastLogin: "2024-07-28T16:15:00.000Z",
      accessLevel: "User"
    },
    {
      id: 13,
      name: "Mona Blue",
      age: 36,
      role: "Engineer",
      hireDate: "2019-11-18",
      isActive: true,
      salary: 87000,
      department: "Development",
      projectsCompleted: 11,
      lastLogin: "2024-07-30T14:50:00.000Z",
      accessLevel: "User"
    },
    {
      id: 14,
      name: "Nina Brown",
      age: 25,
      role: "Intern",
      hireDate: "2023-04-14",
      isActive: true,
      salary: 42000,
      department: "Development",
      projectsCompleted: 2,
      lastLogin: "2024-07-31T11:00:00.000Z",
      accessLevel: "User"
    },
    {
      id: 15,
      name: "Oscar White",
      age: 42,
      role: "Director",
      hireDate: "2016-05-11",
      isActive: true,
      salary: 125000,
      department: "Management",
      projectsCompleted: 22,
      lastLogin: "2024-07-29T09:33:00.000Z",
      accessLevel: "Admin"
    }]
  const [sort,setSort]=useState('')
  const [sortN,setSortN]=useState('')

  const [filters, setFilter] = useState({
    name: { options: '', value: '' },
    role:'',
  })
  const [inputName, setInputName] = useState()
  const colType = {
    id: 'integer',
    name: 'string',
    age: 'integer',
    role: 'enum',
    hireDate: "date",
    isActive: 'boolean',
    salary: 'integer',
    department: 'enum',
    projectsCompleted: 'integer',
    lastLogin: "date",
    accessLevel: 'enum'
  }
  const applyFilter = (data) => {
    let filterdata=data.filter(item => {
      const name = item.name || '';
      const { options, value } = filters.name;
      switch (options) {
        case 'contains':
          return name.includes(value);
        case 'not contains':
          return !name.includes(value);
        case 'equals':
          return name === value;
        case 'not Equal':
          return name !== value;
        case 'startsWith':
          return name.startsWith(value);
        case 'endsWith':
          return name.endsWith(value);
        case 'isNull':
          return name === '';
        case 'isNotNull':
          return name !== '';
        default:
          return true;
      }
    }).filter(item=>{
      const {role}=filters
      if(!role)return true;
        return item.role===role;
    })
    if(sort!=''){

      
      if(sort=='asc'){
        filterdata.sort((x,y)=>x.salary-y.salary)
      }
      else{
        filterdata.sort((x,y)=>y.salary-x.salary)
      }
    }

    if(sortN!=''){

      
      if(sortN=='asc'){
        filterdata.sort((x,y)=>x.name.localeCompare(y.name))
      }
      else{
        filterdata.sort((x,y)=>y.name.localeCompare(x.name))
      }
    }

    return filterdata
  }

 
  useEffect(() => {
    // fetch("https://run.mocky.io/v3/69f60a58-3a36-48c5-a9cf-b100b015950c")
    // .then((res)=>{
    //     return res.text()
    // })
    // .then((data)=>{
    //     console.log(data)

    //     setData(data)
    // })
    setData(applyFilter(data))
  }, [filters,sort,sortN])
console.log(sortN)
  const [filterData, setData] = useState(data)
  const [selectName, setSelectName] = useState('contains')
  const handleInput = (e) => {
    setFilter((prev)=>({...prev, name: { value: e.target.value, options: selectName } }))
    // setFilter({ ...filters, name: { value: e.target.value, options: selectName } })

  }
  const handleOption = (e) => {
    setFilter((prev)=>({...prev, name: { ...name, options: selectName } }))
    setSelectName(e.target.value)
  }
  const handleRole=(e)=>{
    setFilter((prev)=>({...prev,role:e.target.value}))
  }
  const handleSortA=()=>{
    setSort('asc')
  }
  const handleSortD=()=>{
    setSort('des')
  }
  const handleSortAN=()=>{
    setSortN('asc')
  }
  const handleSortDN=()=>{
    setSortN('des')
  }


  const [role,setRole]=useState()
  return (
    <>
      <div>Table</div>
      Filter for name:
      <input type='text' value={inputName} onChange={handleInput} placeholder='Name' />
      <label>
        <select value={selectName} onChange={handleOption}>
          <option value='contains'>contains</option>
          <option value='not contains'>Not contains</option>
          <option value='equals'>Equals</option>
          <option value='not equals'>Not equals</option>
          <option value='startsWith'>startsWith</option>
          <option value='endsWith'>endsWith</option>
          <option value='isNull'>isNull</option>
          <option value='isNotNull'>isNotNull</option>

        </select>
      </label>
      <br />
      Filter for Role: <label>
        <select value={role} onChange={handleRole}>
          <option value=''>None</option>

            <option value='Engineer'>Engineer</option>
            <option value='Manager'>Manager</option>
            <option value='Intern'>Intern</option>
            <option value='Designer'>Designer</option>
            <option value='Director'>Director</option>


        </select>
      </label> <br />
      salary sorting:
      <button onClick={handleSortA}>ascending</button>
      <button onClick={handleSortD}>descending</button>
      <br />
      Name sorting:
      <button onClick={handleSortAN}>ascending</button>
      <button onClick={handleSortDN}>descending</button>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <th>Id</th><th>Name</th>
          <th>Age</th><th>Role</th>
          <th>Hire Date</th><th>IsActive</th>
          <th>Salary</th><th>Department</th>
          <th>Projects Completed</th><th>Last Login</th>
          <th>Access Level</th>
        </thead>
        {
          filterData.map((item, key) => {
            return <>
              <tr>
                <td>
                  {item.id}
                </td>
                <td>
                  {item.name}
                </td>
                <td>
                  {item.age}
                </td>
                <td>
                  {item.role}
                </td>
                <td>
                  {item.hireDate}
                </td>
                <td>
                  {item.isActive}
                </td>
                <td>
                  {item.salary}
                </td>
                <td>
                  {item.department}
                </td>
                <td>
                  {item.projectsCompleted}
                </td>
                <td>
                  {item.lastLogin}
                </td><td>
                  {item.accessLevel}
                </td>
              </tr>
            </>

          })
        }
      </table>

    </>
  )
}

export default Table