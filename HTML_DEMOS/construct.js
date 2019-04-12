function doWhile(a,b)
{

document.write("<table border=1>");
for(i=1;i<=10;i++)
{
	document.write("<tr>");
	for(j=a;j<=b;j++)
	{
		document.write("<td width=50 style='text-align:center;'> "+(i*j)+"</td>");
	}
	document.write("</tr>");
}
document.write("</table>");
}