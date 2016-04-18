

def complete_zeros(q, w):
    l = len(w)
    for i in range(0, q-l):
        w = '0{0}'.format(w)
    return w
