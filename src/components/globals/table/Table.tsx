/* React */
  import { useEffect, useState } from "react";

  
export const Table = ({ data }: any) => {
  const [headers, setHeaders] = useState<string[]>([]);

  const getHeadings = () => {
    const prop = Object.keys(data[0]) 
    return prop;
  };
  
  const cleanLabel = (label: string) => {
    return label.split('_')[0]
  }
 
  useEffect(() => {
    if (data) setHeaders(getHeadings());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <table>
      <thead>
        <tr className="table__tr">
          {headers.map((heading: any) => {
            return <th key={heading} className="table__th">{cleanLabel(heading)}</th>;
          })}
        </tr>
      </thead>
      <tbody className="table__body">
        {data.map((row: any, index: any) => {
          return (
            <tr key={index} className="table__tr">
              {headers.map((key: any, index: any) => {
                return <td key={index} className="table__td">{row[key]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};