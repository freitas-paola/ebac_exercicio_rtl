import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve renderizar dois comentários', () => {
        render(<PostComment/>);
        fireEvent.change(screen.getByTestId('text-comment'), {
            target: {
                value: 'Primeiro comentário'
            }
        });
        fireEvent.click(screen.getByTestId('button-comment'));
        
        fireEvent.change(screen.getByTestId('text-comment'), {
            target: {
                value: 'Segundo comentário'
            }
        });
        fireEvent.click(screen.getByTestId('button-comment'));

        expect(screen.getAllByTestId('container-comment')).toHaveLength(2);

    })
});