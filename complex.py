class Complex():
    def __init__(self,re,img):
        self.re=re
        self.img=img 
    def __add__(self,other):
        return Complex(self.re + other.re,self.img + other.img)
    def __sub__(self,other):
        return Complex(self.re - other.re,self.img - other.img)
    def __mul__(self,other):
        return Complex(self.re * other.re - self.img * other.img, self.re * other.img + self.img * other.re)
    def __truediv__(self,other):
        denum = other.re ** 2 + other.img ** 2
        r_num = self.re * other.re + self.img * other.img  
        i_num = self.img * other.re - self.re * other.img
        return Complex(round(r_num/denum,2),round(i_num/denum,2))
    def __repr__(self):
        sign = '+' if self.img > 0 else '-'
        return str(self.re) + sign + str(abs(self.img)) + 'i'
    
c,d = Complex(3,5), Complex(1,2)
print(c,d)
print(c + d, c - d) 
print(c * d, c/d)

# đáp án 